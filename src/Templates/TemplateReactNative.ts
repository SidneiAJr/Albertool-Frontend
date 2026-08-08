export function templateBotao() {
    return `import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Botao } from '../../interfaces/interfaceComp'

const BotaoReu = ({ texto, cor, tamanho, borda, onConfirmar, onCancelar, style }: Botao) => {
    return (
        <TouchableOpacity
            onPress={onConfirmar}
            style={[styles.botao, { backgroundColor: cor, padding: tamanho, borderRadius: borda }, style]}
        >
            <Text style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}

export default BotaoReu

const styles = StyleSheet.create({
    botao: { alignItems: 'center', justifyContent: 'center' },
    texto: { color: '#fff', fontWeight: 'bold' }
})
`
}

export function templateInput() {
    return `import { TextInput, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { input } from '../../interfaces/interfaceComp'

const InputReu = ({ tamanho, borda, corBorda, isActive, style }: input) => {
    const [valor, setValor] = useState('')

    return (
        <View style={[styles.container, { borderWidth: borda, borderColor: corBorda }, style]}>
            <TextInput
                value={valor}
                onChangeText={setValor}
                style={[styles.input, { fontSize: tamanho }]}
            />
        </View>
    )
}

export default InputReu

const styles = StyleSheet.create({
    container: { borderRadius: 8, paddingHorizontal: 12 },
    input: { paddingVertical: 10 }
})
`
}

export function templateCard() {
    return `import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Card } from '../../interfaces/interfaceComp'

const CardReu = ({ tamanho, borda, fundo, isActive, style }: Card) => {
    return (
        <View style={[
            styles.card,
            {
                padding: tamanho,
                borderWidth: borda,
                backgroundColor: fundo ?? '#fff',
                opacity: isActive ? 1 : 0.6
            },
            style
        ]}>
        </View>
    )
}

export default CardReu

const styles = StyleSheet.create({
    card: { borderRadius: 12, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 }
})
`
}

export function templateTexto() {
    return `import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { Texto } from '../../interfaces/interfaceComp'

const TextoReu = ({ tipo, cor, fonteEstilo, style }: Texto) => {
    const tamanho = tipo === 'Grande' ? 24 : tipo === 'Medio' ? 18 : 12

    return (
        <Text style={[{ color: cor, fontSize: tamanho, fontStyle: fonteEstilo }, style]}>
        </Text>
    )
}

export default TextoReu

const styles = StyleSheet.create({})
`
}

export function templateImagem() {
    return `import { Image, View, StyleSheet } from 'react-native'
import React from 'react'
import { Imagem } from '../../interfaces/interfaceComp'

const ImagemReu = ({ tamanho, borda, cor, fundo, style }: Imagem) => {
    return (
        <View style={[{ backgroundColor: fundo, borderRadius: borda, padding: 2 }, style]}>
            <Image
                source={{ uri: '' }}
                style={[styles.imagem, { width: tamanho, height: tamanho, borderRadius: borda }]}
            />
        </View>
    )
}

export default ImagemReu

const styles = StyleSheet.create({
    imagem: { resizeMode: 'cover' }
})
`
}

export function templateLista() {
    return `import { FlatList, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { Lista } from '../../interfaces/interfaceComp'

const ListaReu = ({ dados, keyExtractor, renderItem, titulo, vazio, style }: Lista) => {
    return (
        <View style={[styles.container, style]}>
            {titulo && <Text style={styles.titulo}>{titulo}</Text>}
            <FlatList
                data={dados}
                keyExtractor={keyExtractor}
                renderItem={({ item }) => renderItem(item)}
                ListEmptyComponent={<Text style={styles.vazio}>{vazio ?? 'Nenhum item encontrado'}</Text>}
            />
        </View>
    )
}

export default ListaReu

const styles = StyleSheet.create({
    container: { flex: 1 },
    titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
    vazio: { textAlign: 'center', marginTop: 20, color: '#999' }
})
`
}

export function templateModal() {
    return `import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Modal as ModalProps } from '../../interfaces/interfaceComp'

const ModalReu = ({ visivel, onFechar, titulo, conteudo, corFundo, style }: ModalProps) => {
    return (
        <Modal visible={visivel} transparent animationType="fade">
            <View style={styles.overlay}>
                <View style={[styles.container, { backgroundColor: corFundo ?? '#fff' }, style]}>
                    {titulo && <Text style={styles.titulo}>{titulo}</Text>}
                    {conteudo}
                    <TouchableOpacity onPress={onFechar} style={styles.fechar}>
                        <Text style={styles.fecharTexto}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default ModalReu

const styles = StyleSheet.create({
    overlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
    container: { width: '85%', borderRadius: 12, padding: 20 },
    titulo: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
    fechar: { marginTop: 16, alignItems: 'center' },
    fecharTexto: { color: '#007AFF', fontWeight: 'bold' }
})
`
}

export function templateLoading() {
    return `import { ActivityIndicator, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { loading } from '../../interfaces/interfaceComp'

const LoadingReu = ({ visivel, mensagem, cor, style }: loading) => {
    if (!visivel) return null

    return (
        <View style={[styles.container, style]}>
            <ActivityIndicator size="large" color={cor ?? '#007AFF'} />
            {mensagem && <Text style={styles.mensagem}>{mensagem}</Text>}
        </View>
    )
}

export default LoadingReu

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    mensagem: { marginTop: 12, fontSize: 14, color: '#666' }
})
`
}

export function templateHeader() {
    return `import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Header } from '../../interfaces/interfaceComp'

const HeaderReu = ({ titulo, subtitulo, voltarVisivel, onVoltar, corFundo, style }: Header) => {
    return (
        <View style={[styles.container, { backgroundColor: corFundo ?? '#fff' }, style]}>
            {voltarVisivel && (
                <TouchableOpacity onPress={onVoltar} style={styles.voltar}>
                    <Text style={styles.voltarTexto}>{'< Voltar'}</Text>
                </TouchableOpacity>
            )}
            <Text style={styles.titulo}>{titulo}</Text>
            {subtitulo && <Text style={styles.subtitulo}>{subtitulo}</Text>}
        </View>
    )
}

export default HeaderReu

const styles = StyleSheet.create({
    container: { padding: 16, paddingTop: 48 },
    voltar: { marginBottom: 8 },
    voltarTexto: { color: '#007AFF', fontSize: 14 },
    titulo: { fontSize: 24, fontWeight: 'bold' },
    subtitulo: { fontSize: 14, color: '#666', marginTop: 4 }
})
`
}

export function templateBadge() {
    return `import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Badge } from '../../interfaces/interfaceComp'

const BadgeReu = ({ valor, cor, visivel, style }: Badge) => {
    if (!visivel) return null

    return (
        <View style={[styles.badge, { backgroundColor: cor ?? '#FF3B30' }, style]}>
            <Text style={styles.texto}>{valor > 99 ? '99+' : valor}</Text>
        </View>
    )
}

export default BadgeReu

const styles = StyleSheet.create({
    badge: { minWidth: 20, height: 20, borderRadius: 10, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 4 },
    texto: { color: '#fff', fontSize: 11, fontWeight: 'bold' }
})
`
}

export function templateDropdown() {
    return `import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from '../../interfaces/interfaceComp'

const DropdownReu = ({ opcoes, selecionado, onSelecionar, placeholder, borda, style }: Dropdown) => {
    const [aberto, setAberto] = useState(false)

    return (
        <View style={[styles.container, { borderWidth: borda ?? 1 }, style]}>
            <TouchableOpacity onPress={() => setAberto(!aberto)} style={styles.cabecalho}>
                <Text style={styles.texto}>{selecionado ?? placeholder ?? 'Selecione...'}</Text>
                <Text>{aberto ? '▲' : '▼'}</Text>
            </TouchableOpacity>
            {aberto && (
                <FlatList
                    data={opcoes}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => { onSelecionar(item); setAberto(false) }}
                            style={styles.opcao}
                        >
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    )
}

export default DropdownReu

const styles = StyleSheet.create({
    container: { borderRadius: 8, borderColor: '#ccc', overflow: 'hidden' },
    cabecalho: { flexDirection: 'row', justifyContent: 'space-between', padding: 12 },
    texto: { fontSize: 14, color: '#333' },
    opcao: { padding: 12, borderTopWidth: 1, borderTopColor: '#eee' }
})
`
}

export function templateAvatar() {
    return `import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

interface AvatarProps {
    uri?: string
    nome: string
    tamanho?: number
    style?: any
}

const AvatarReu = ({ uri, nome, tamanho = 48, style }: AvatarProps) => {
    const iniciais = nome.split(' ').map((p: string) => p[0]).join('').toUpperCase().slice(0, 2)

    return (
        <View style={[styles.container, { width: tamanho, height: tamanho, borderRadius: tamanho / 2 }, style]}>
            {uri
                ? <Image source={{ uri }} style={{ width: tamanho, height: tamanho, borderRadius: tamanho / 2 }} />
                : <Text style={[styles.iniciais, { fontSize: tamanho / 3 }]}>{iniciais}</Text>
            }
        </View>
    )
}

export default AvatarReu

const styles = StyleSheet.create({
    container: { backgroundColor: '#007AFF', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
    iniciais: { color: '#fff', fontWeight: 'bold' }
})
`
}

export function templateDivider() {
    return `import { View, StyleSheet } from 'react-native'
import React from 'react'

interface DividerProps {
    cor?: string
    espessura?: number
    margem?: number
    style?: any
}

const DividerReu = ({ cor, espessura = 1, margem = 16, style }: DividerProps) => {
    return (
        <View style={[styles.divider, {
            backgroundColor: cor ?? '#eee',
            height: espessura,
            marginVertical: margem
        }, style]} />
    )
}

export default DividerReu

const styles = StyleSheet.create({
    divider: { width: '100%' }
})
`
}

export function templateToast() {
    return `import { View, Text, StyleSheet, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'

interface ToastProps {
    mensagem: string
    visivel: boolean
    tipo?: 'sucesso' | 'erro' | 'aviso' | 'info'
    style?: any
}

const cores: Record<string, string> = {
    sucesso: '#34C759',
    erro: '#FF3B30',
    aviso: '#FF9500',
    info: '#007AFF'
}

const ToastReu = ({ mensagem, visivel, tipo = 'info', style }: ToastProps) => {
    const opacidade = useRef(new Animated.Value(0)).current

    useEffect(() => {
        if (visivel) {
            Animated.sequence([
                Animated.timing(opacidade, { toValue: 1, duration: 300, useNativeDriver: true }),
                Animated.delay(2000),
                Animated.timing(opacidade, { toValue: 0, duration: 300, useNativeDriver: true })
            ]).start()
        }
    }, [visivel])

    return (
        <Animated.View style={[styles.container, { backgroundColor: cores[tipo], opacity: opacidade }, style]}>
            <Text style={styles.texto}>{mensagem}</Text>
        </Animated.View>
    )
}

export default ToastReu

const styles = StyleSheet.create({
    container: { position: 'absolute', bottom: 40, left: 20, right: 20, padding: 14, borderRadius: 10, alignItems: 'center' },
    texto: { color: '#fff', fontWeight: 'bold', fontSize: 14 }
})
`
}