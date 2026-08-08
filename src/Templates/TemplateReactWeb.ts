export function templateBotaoWeb() {
    return `import React from 'react'
import { Botao } from '../../interfaces/interfaceComp'

const BotaoReu = ({ texto, cor, tamanho, borda, onConfirmar, onCancelar, style }: Botao) => {
    return (
        <button
            onClick={onConfirmar}
            style={{
                backgroundColor: cor,
                padding: tamanho,
                borderRadius: borda,
                border: 'none',
                color: '#fff',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'opacity 0.2s',
                ...style
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        >
            {texto}
        </button>
    )
}

export default BotaoReu
`
}

export function templateInputWeb() {
    return `import React, { useState } from 'react'
import { Input } from '../../interfaces/interfaceComp'

const InputReu = ({ tamanho, borda, corBorda, isActive, obrigatorio, style }: Input) => {
    const [valor, setValor] = useState('')
    const [erro, setErro] = useState('')

    const validar = () => {
        if (obrigatorio && valor.trim() === '') setErro(obrigatorio)
        else setErro('')
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <input
                value={valor}
                onChange={e => setValor(e.target.value)}
                onBlur={validar}
                style={{
                    fontSize: tamanho,
                    borderWidth: borda,
                    borderColor: erro ? '#FF3B30' : corBorda,
                    borderStyle: 'solid',
                    borderRadius: 8,
                    padding: '10px 12px',
                    outline: 'none',
                    opacity: isActive === false ? 0.6 : 1,
                    transition: 'border-color 0.2s',
                    ...style
                }}
            />
            {erro && <span style={{ color: '#FF3B30', fontSize: 12 }}>{erro}</span>}
        </div>
    )
}

export default InputReu
`
}

export function templateCardWeb() {
    return `import React from 'react'
import { Card } from '../../interfaces/interfaceComp'

const CardReu = ({ tamanho, borda, fundo, isActive, style }: Card) => {
    return (
        <div
            style={{
                padding: tamanho,
                borderWidth: borda ?? 0,
                borderStyle: 'solid',
                backgroundColor: fundo ?? '#fff',
                opacity: isActive === false ? 0.6 : 1,
                borderRadius: 12,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'opacity 0.2s',
                ...style
            }}
        >
        </div>
    )
}

export default CardReu
`
}

export function templateTextoWeb() {
    return `import React from 'react'
import { Texto } from '../../interfaces/interfaceComp'

const TextoReu = ({ tipo, cor, fonteEstilo, fontePeso, style }: Texto) => {
    const tamanho = tipo === 'Grande' ? 24 : tipo === 'Medio' ? 18 : 12

    return (
        <p
            style={{
                color: cor,
                fontSize: tamanho,
                fontStyle: fonteEstilo ?? 'normal',
                fontWeight: fontePeso ?? 'normal',
                margin: 0,
                ...style
            }}
        >
        </p>
    )
}

export default TextoReu
`
}

export function templateImagemWeb() {
    return `import React from 'react'
import { Imagem } from '../../interfaces/interfaceComp'

const ImagemReu = ({ tamanho, borda, cor, fundo, style }: Imagem) => {
    return (
        <div style={{ backgroundColor: fundo, borderRadius: borda, display: 'inline-block', padding: 2 }}>
            <img
                src=""
                alt=""
                style={{
                    width: tamanho,
                    height: tamanho,
                    borderRadius: borda,
                    borderWidth: borda,
                    borderColor: cor,
                    borderStyle: 'solid',
                    objectFit: 'cover',
                    display: 'block',
                    ...style
                }}
            />
        </div>
    )
}

export default ImagemReu
`
}

export function templateListaWeb() {
    return `import React from 'react'
import { Lista } from '../../interfaces/interfaceComp'

const ListaReu = ({ dados, keyExtractor, renderItem, titulo, vazio, style }: Lista) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
            {titulo && <h2 style={{ fontSize: 18, fontWeight: 'bold', margin: '0 0 8px' }}>{titulo}</h2>}
            {dados.length === 0
                ? <p style={{ textAlign: 'center', color: '#999', marginTop: 20 }}>{vazio ?? 'Nenhum item encontrado'}</p>
                : dados.map(item => (
                    <div key={keyExtractor(item)}>
                        {renderItem(item)}
                    </div>
                ))
            }
        </div>
    )
}

export default ListaReu
`
}

export function templateModalWeb() {
    return `import React, { useEffect } from 'react'
import { Modal } from '../../interfaces/interfaceComp'

const ModalReu = ({ visivel, onFechar, titulo, conteudo, corFundo, style }: Modal) => {
    useEffect(() => {
        const fecharEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onFechar() }
        document.addEventListener('keydown', fecharEsc)
        return () => document.removeEventListener('keydown', fecharEsc)
    }, [])

    if (!visivel) return null

    return (
        <div
            onClick={onFechar}
            style={{
                position: 'fixed', inset: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 999
            }}
        >
            <div
                onClick={e => e.stopPropagation()}
                style={{
                    backgroundColor: corFundo ?? '#fff',
                    borderRadius: 12,
                    padding: 24,
                    width: '90%',
                    maxWidth: 480,
                    ...style
                }}
            >
                {titulo && <h2 style={{ margin: '0 0 12px', fontSize: 18 }}>{titulo}</h2>}
                {conteudo}
                <button
                    onClick={onFechar}
                    style={{ marginTop: 16, color: '#007AFF', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    Fechar
                </button>
            </div>
        </div>
    )
}

export default ModalReu
`
}

export function templateLoadingWeb() {
    return `import React from 'react'
import { Loading } from '../../interfaces/interfaceComp'

const LoadingReu = ({ visivel, mensagem, cor, style }: Loading) => {
    if (!visivel) return null

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', ...style }}>
            <div style={{
                width: 40, height: 40,
                borderRadius: '50%',
                border: \`4px solid \${cor ?? '#007AFF'}\`,
                borderTopColor: 'transparent',
                animation: 'spin 0.8s linear infinite'
            }} />
            {mensagem && <p style={{ marginTop: 12, fontSize: 14, color: '#666' }}>{mensagem}</p>}
            <style>{\`@keyframes spin { to { transform: rotate(360deg) } }\`}</style>
        </div>
    )
}

export default LoadingReu
`
}

export function templateHeaderWeb() {
    return `import React from 'react'
import { Header } from '../../interfaces/interfaceComp'

const HeaderReu = ({ titulo, subtitulo, voltarVisivel, onVoltar, corFundo, style }: Header) => {
    return (
        <header style={{ backgroundColor: corFundo ?? '#fff', padding: '16px 24px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', ...style }}>
            {voltarVisivel && (
                <button
                    onClick={onVoltar}
                    style={{ background: 'none', border: 'none', color: '#007AFF', cursor: 'pointer', marginBottom: 8, fontSize: 14 }}
                >
                    {'< Voltar'}
                </button>
            )}
            <h1 style={{ margin: 0, fontSize: 24, fontWeight: 'bold' }}>{titulo}</h1>
            {subtitulo && <p style={{ margin: '4px 0 0', fontSize: 14, color: '#666' }}>{subtitulo}</p>}
        </header>
    )
}

export default HeaderReu
`
}

export function templateBadgeWeb() {
    return `import React from 'react'
import { Badge } from '../../interfaces/interfaceComp'

const BadgeReu = ({ valor, cor, visivel, style }: Badge) => {
    if (!visivel) return null

    return (
        <span style={{
            backgroundColor: cor ?? '#FF3B30',
            color: '#fff',
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 'bold',
            minWidth: 20,
            height: 20,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 4px',
            ...style
        }}>
            {valor > 99 ? '99+' : valor}
        </span>
    )
}

export default BadgeReu
`
}

export function templateDropdownWeb() {
    return `import React, { useState, useRef, useEffect } from 'react'
import { Dropdown } from '../../interfaces/interfaceComp'

const DropdownReu = ({ opcoes, selecionado, onSelecionar, placeholder, borda, style }: Dropdown) => {
    const [aberto, setAberto] = useState(false)
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const fechar = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) setAberto(false)
        }
        document.addEventListener('mousedown', fechar)
        return () => document.removeEventListener('mousedown', fechar)
    }, [])

    return (
        <div ref={ref} style={{ position: 'relative', ...style }}>
            <button
                onClick={() => setAberto(!aberto)}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 12px',
                    borderRadius: 8,
                    border: \`\${borda ?? 1}px solid #ccc\`,
                    backgroundColor: '#fff',
                    cursor: 'pointer',
                    fontSize: 14,
                    color: selecionado ? '#333' : '#999'
                }}
            >
                <span>{selecionado ?? placeholder ?? 'Selecione...'}</span>
                <span>{aberto ? '▲' : '▼'}</span>
            </button>
            {aberto && (
                <div style={{
                    position: 'absolute',
                    top: '110%',
                    left: 0,
                    right: 0,
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    borderRadius: 8,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    zIndex: 100,
                    overflow: 'hidden'
                }}>
                    {opcoes.map(item => (
                        <button
                            key={item}
                            onClick={() => { onSelecionar(item); setAberto(false) }}
                            style={{
                                width: '100%',
                                padding: '10px 12px',
                                background: 'none',
                                border: 'none',
                                borderBottom: '1px solid #eee',
                                cursor: 'pointer',
                                textAlign: 'left',
                                fontSize: 14,
                                color: item === selecionado ? '#007AFF' : '#333'
                            }}
                            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f5f5f5')}
                            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DropdownReu
`
}

export function templateAvatarWeb() {
    return `import React from 'react'

interface AvatarProps {
    uri?: string
    nome: string
    tamanho?: number
    style?: any
}

const AvatarReu = ({ uri, nome, tamanho = 48, style }: AvatarProps) => {
    const iniciais = nome.split(' ').map((p: string) => p[0]).join('').toUpperCase().slice(0, 2)

    return (
        <div style={{
            width: tamanho,
            height: tamanho,
            borderRadius: '50%',
            backgroundColor: '#007AFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            flexShrink: 0,
            ...style
        }}>
            {uri
                ? <img src={uri} alt={nome} style={{ width: tamanho, height: tamanho, objectFit: 'cover' }} />
                : <span style={{ color: '#fff', fontWeight: 'bold', fontSize: tamanho / 3 }}>{iniciais}</span>
            }
        </div>
    )
}

export default AvatarReu
`
}

export function templateDividerWeb() {
    return `import React from 'react'

interface DividerProps {
    cor?: string
    espessura?: number
    margem?: number
    style?: any
}

const DividerReu = ({ cor, espessura = 1, margem = 16, style }: DividerProps) => {
    return (
        <hr style={{
            border: 'none',
            borderTop: \`\${espessura}px solid \${cor ?? '#eee'}\`,
            marginTop: margem,
            marginBottom: margem,
            width: '100%',
            ...style
        }} />
    )
}

export default DividerReu
`
}

export function templateToastWeb() {
    return `import React, { useEffect, useState } from 'react'

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
    const [opacity, setOpacity] = useState(0)

    useEffect(() => {
        if (visivel) {
            setOpacity(1)
            const timer = setTimeout(() => setOpacity(0), 2300)
            return () => clearTimeout(timer)
        }
    }, [visivel])

    if (!visivel && opacity === 0) return null

    return (
        <div style={{
            position: 'fixed',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: cores[tipo],
            color: '#fff',
            padding: '12px 24px',
            borderRadius: 10,
            fontWeight: 'bold',
            fontSize: 14,
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            zIndex: 9999,
            opacity,
            transition: 'opacity 0.3s ease',
            whiteSpace: 'nowrap',
            ...style
        }}>
            {mensagem}
        </div>
    )
}

export default ToastReu
`
}