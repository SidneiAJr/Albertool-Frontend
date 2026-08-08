export function InterfaceComp() {
    return `
export interface Texto {
    tipo: 'Grande' | 'Pequeno' | 'Medio'
    cor: string
    fonteEstilo?: 'normal' | 'italic'
    fontePeso?: 'normal' | 'bold'
    style?: any
}

export interface Card {
    tamanho: number
    borda?: number
    fundo?: string
    isActive?: boolean
    style?: any
}

export interface Lista {
    dados: any[]
    keyExtractor: (item: any) => string
    renderItem: (item: any) => React.ReactElement
    titulo?: string
    vazio?: string
    style?: any
}

export interface Imagem {
    tamanho: number
    borda?: number
    cor?: string
    fundo?: string
    style?: any
}

export interface Loading {
    visivel: boolean
    mensagem?: string
    cor?: string
    style?: any
}

export interface Input {
    tamanho: number
    borda: number
    corBorda: string
    isActive?: boolean
    obrigatorio?: string
    style?: any
}

export interface Header {
    titulo: string
    subtitulo?: string
    voltarVisivel?: boolean
    onVoltar?: () => void
    corFundo?: string
    style?: any
}

export interface Alert {
    titulo: string
    mensagem: string
    tipo?: 'sucesso' | 'erro' | 'aviso' | 'info'
    onConfirmar?: () => void
    onCancelar?: () => void
    style?: any
}

export interface Badge {
    valor: number
    cor?: string
    visivel?: boolean
    style?: any
}

export interface Dropdown {
    opcoes: string[]
    selecionado?: string
    onSelecionar: (item: string) => void
    placeholder?: string
    borda?: number
    style?: any
}

export interface Botao {
    tamanho: number
    borda: number
    texto: string
    cor: string
    onConfirmar?: () => void
    onCancelar?: () => void
    style?: any
}

export interface Modal {
    visivel: boolean
    onFechar: () => void
    titulo?: string
    conteudo?: React.ReactElement
    corFundo?: string
    style?: any
}
`
}

export function InterfaceUtils() {
    return `
import AsyncStorage from '@react-native-async-storage/async-storage'

// ─── Formatação ───────────────────────────────────────────

export const formatarSaida = (valor: number, casas: number = 2) => {
    return valor.toFixed(casas)
}

export const formatarCPF = (entrada: string) => {
    return entrada.replace(/(\\d{3})(\\d{3})(\\d{3})(\\d{2})/, '$1.$2.$3-$4')
}

export const formatarCNPJ = (entrada: string) => {
    return entrada.replace(/(\\d{2})(\\d{3})(\\d{3})(\\d{4})(\\d{2})/, '$1.$2.$3/$4-$5')
}

export const formatarTelefone = (entrada: string) => {
    return entrada.replace(/(\\d{2})(\\d{5})(\\d{4})/, '($1) $2-$3')
}

export const formatarCEP = (entrada: string) => {
    return entrada.replace(/(\\d{5})(\\d{3})/, '$1-$2')
}

export const formatarCaixaAlta = (entrada: string) => entrada.toUpperCase()
export const formatarCaixaBaixa = (entrada: string) => entrada.toLowerCase()

export const formatarData = (data: string) => {
    const [ano, mes, dia] = data.split('-')
    return \`\${dia}/\${mes}/\${ano}\`
}

export const formatarMoeda = (valor: number, moeda: string = 'BRL'): string => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: moeda })
}

// ─── Cálculos ─────────────────────────────────────────────

export const calcularIdade = (data_nascimento: string): number => {
    const hoje = new Date()
    const nascimento = new Date(data_nascimento)
    let idade = hoje.getFullYear() - nascimento.getFullYear()
    const mes = hoje.getMonth() - nascimento.getMonth()
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) idade--
    return idade
}

export const capitalizarNome = (nome: string): string => {
    return nome.toLowerCase().split(' ')
        .map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ')
}

// ─── AsyncStorage (React Native) ──────────────────────────

export const salvarLocal = async (chave: string, valor: any) => {
    await AsyncStorage.setItem(chave, JSON.stringify(valor))
}

export const lerLocal = async (chave: string) => {
    const valor = await AsyncStorage.getItem(chave)
    return valor ? JSON.parse(valor) : null
}

export const removerLocal = async (chave: string) => {
    await AsyncStorage.removeItem(chave)
}

// ─── Validações ───────────────────────────────────────────

export const validarSenha = (senha: string): string | null => {
    if (senha.length < 8) return 'Mínimo 8 caracteres'
    if (!/[A-Z]/.test(senha)) return 'Precisa de letra maiúscula'
    if (!/[0-9]/.test(senha)) return 'Precisa de número'
    return null
}

export const validarEmail = (email: string): boolean => {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)
}

export const validarTelefone = (telefone: string): boolean => {
    return /^\\(\\d{2}\\) \\d{5}-\\d{4}$/.test(telefone)
}

export const validarNome = (nome: string): boolean => nome.trim().length >= 3

export const validarCPF = (cpf: string): boolean => {
    const nums = cpf.replace(/\\D/g, '')
    if (nums.length !== 11 || /^(\\d)\\1+$/.test(nums)) return false
    let soma = 0
    for (let i = 0; i < 9; i++) soma += parseInt(nums[i]) * (10 - i)
    let resto = (soma * 10) % 11
    if (resto === 10 || resto === 11) resto = 0
    if (resto !== parseInt(nums[9])) return false
    soma = 0
    for (let i = 0; i < 10; i++) soma += parseInt(nums[i]) * (11 - i)
    resto = (soma * 10) % 11
    if (resto === 10 || resto === 11) resto = 0
    return resto === parseInt(nums[10])
}

export const validarCEP = (cep: string): boolean => {
    return /^\\d{5}-\\d{3}$/.test(cep)
}
`
}

export function InterfaceUtilsWeb() {
    return `
// ─── Formatação ───────────────────────────────────────────

export const formatarSaida = (valor: number, casas: number = 2) => {
    return valor.toFixed(casas)
}

export const formatarCPF = (entrada: string) => {
    return entrada.replace(/(\\d{3})(\\d{3})(\\d{3})(\\d{2})/, '$1.$2.$3-$4')
}

export const formatarCNPJ = (entrada: string) => {
    return entrada.replace(/(\\d{2})(\\d{3})(\\d{3})(\\d{4})(\\d{2})/, '$1.$2.$3/$4-$5')
}

export const formatarTelefone = (entrada: string) => {
    return entrada.replace(/(\\d{2})(\\d{5})(\\d{4})/, '($1) $2-$3')
}

export const formatarCEP = (entrada: string) => {
    return entrada.replace(/(\\d{5})(\\d{3})/, '$1-$2')
}

export const formatarCaixaAlta = (entrada: string) => entrada.toUpperCase()
export const formatarCaixaBaixa = (entrada: string) => entrada.toLowerCase()

export const formatarData = (data: string) => {
    const [ano, mes, dia] = data.split('-')
    return \`\${dia}/\${mes}/\${ano}\`
}

export const formatarMoeda = (valor: number, moeda: string = 'BRL'): string => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: moeda })
}

// ─── Cálculos ─────────────────────────────────────────────

export const calcularIdade = (data_nascimento: string): number => {
    const hoje = new Date()
    const nascimento = new Date(data_nascimento)
    let idade = hoje.getFullYear() - nascimento.getFullYear()
    const mes = hoje.getMonth() - nascimento.getMonth()
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) idade--
    return idade
}

export const capitalizarNome = (nome: string): string => {
    return nome.toLowerCase().split(' ')
        .map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ')
}

// ─── LocalStorage (React Web) ─────────────────────────────

export const salvarLocal = (chave: string, valor: any) => {
    localStorage.setItem(chave, JSON.stringify(valor))
}

export const lerLocal = (chave: string) => {
    const valor = localStorage.getItem(chave)
    return valor ? JSON.parse(valor) : null
}

export const removerLocal = (chave: string) => {
    localStorage.removeItem(chave)
}

// ─── Validações ───────────────────────────────────────────

export const validarSenha = (senha: string): string | null => {
    if (senha.length < 8) return 'Mínimo 8 caracteres'
    if (!/[A-Z]/.test(senha)) return 'Precisa de letra maiúscula'
    if (!/[0-9]/.test(senha)) return 'Precisa de número'
    return null
}

export const validarEmail = (email: string): boolean => {
    return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)
}

export const validarTelefone = (telefone: string): boolean => {
    return /^\\(\\d{2}\\) \\d{5}-\\d{4}$/.test(telefone)
}

export const validarNome = (nome: string): boolean => nome.trim().length >= 3

export const validarCPF = (cpf: string): boolean => {
    const nums = cpf.replace(/\\D/g, '')
    if (nums.length !== 11 || /^(\\d)\\1+$/.test(nums)) return false
    let soma = 0
    for (let i = 0; i < 9; i++) soma += parseInt(nums[i]) * (10 - i)
    let resto = (soma * 10) % 11
    if (resto === 10 || resto === 11) resto = 0
    if (resto !== parseInt(nums[9])) return false
    soma = 0
    for (let i = 0; i < 10; i++) soma += parseInt(nums[i]) * (11 - i)
    resto = (soma * 10) % 11
    if (resto === 10 || resto === 11) resto = 0
    return resto === parseInt(nums[10])
}

export const validarCEP = (cep: string): boolean => {
    return /^\\d{5}-\\d{3}$/.test(cep)
}
`
}

export function validUsuer() {
    return `
export interface UsuarioGeral {
    id: string
    nome: string
    email: string
    foto?: string
    ativo?: boolean
    data_nascimento: string
    createdAt?: string
}

export interface UsuarioCadastro {
    nome: string
    email: string
    senha: string
    data_nascimento: string
    foto?: string
}

export interface UsuarioLogin {
    email: string
    senha: string
}

export interface UsuarioTrocarSenha {
    senhaAtual: string
    senhaNova: string
    confirmarSenha: string
}

export interface UsuarioResposta {
    usuario: UsuarioGeral
    token: string
}

export interface UsuarioAtualizar {
    nome?: string
    foto?: string
    data_nascimento?: string
}
`
}