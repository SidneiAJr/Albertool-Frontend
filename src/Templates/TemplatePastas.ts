import * as fs from 'fs'
import * as path from 'path'

export function criarPastas(pasta: string) {
    const base = path.join(pasta, 'Albertool Frontend')

    // Interfaces e Utils
    fs.mkdirSync(path.join(base, 'interfaces'), { recursive: true })
    fs.mkdirSync(path.join(base, 'utils'), { recursive: true })

    // Componentes
    fs.mkdirSync(path.join(base, 'components', 'buttons'), { recursive: true })
    fs.mkdirSync(path.join(base, 'components', 'inputs'), { recursive: true })
    fs.mkdirSync(path.join(base, 'components', 'cards'), { recursive: true })
    fs.mkdirSync(path.join(base, 'components', 'modals'), { recursive: true })
    fs.mkdirSync(path.join(base, 'components', 'images'), { recursive: true })
    fs.mkdirSync(path.join(base, 'components', 'lists'), { recursive: true })
    fs.mkdirSync(path.join(base, 'components', 'texts'), { recursive: true })
    fs.mkdirSync(path.join(base, 'components', 'headers'), { recursive: true })
    fs.mkdirSync(path.join(base, 'components', 'badges'), { recursive: true })
    fs.mkdirSync(path.join(base, 'components', 'dropdowns'), { recursive: true })
    fs.mkdirSync(path.join(base, 'components', 'avatars'), { recursive: true })
    fs.mkdirSync(path.join(base, 'components', 'dividers'), { recursive: true })
    fs.mkdirSync(path.join(base, 'components', 'toasts'), { recursive: true })
    fs.mkdirSync(path.join(base, 'components', 'loadings'), { recursive: true })

    // Documentação
    fs.mkdirSync(path.join(base, 'docs'), { recursive: true })

    return base
}