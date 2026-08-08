import * as vscode from 'vscode'
import * as fs from 'fs'
import * as path from 'path'
import * as Interfaces from './Templates/TemplateInterfaces'
import * as TemplateWeb from './Templates/TemplateReactWeb'
import * as TemplateNative from './Templates/TemplateReactNative'
import { criarPastas } from './Templates/TemplatePastas'
import { documentacao } from './Templates/TemplateDocumentacao'

export function activate(context: vscode.ExtensionContext) {

    const comando = vscode.commands.registerCommand('albertool-frontend.criar', async () => {

        const plataforma = await vscode.window.showQuickPick(
            ['React Native', 'React Web'],
            { placeHolder: 'Qual plataforma?' }
        )
        if (!plataforma) return

        const pasta = vscode.workspace.workspaceFolders?.[0].uri.fsPath
        if (!pasta) return vscode.window.showErrorMessage('Abra uma pasta primeiro!')

        const base = criarPastas(pasta)

        // Interfaces e Utils
        fs.writeFileSync(path.join(base, 'interfaces', 'interfaceComp.ts'), Interfaces.InterfaceComp())
        fs.writeFileSync(path.join(base, 'interfaces', 'interfaceUser.ts'), Interfaces.validUsuer())
        fs.writeFileSync(path.join(base, 'utils', 'utils.ts'), Interfaces.InterfaceUtils())

        // Documentação
        fs.writeFileSync(path.join(base, 'docs', 'README.md'), documentacao())

        if (plataforma === 'React Native') {
            fs.writeFileSync(path.join(base, 'components', 'buttons', 'botaoReu.tsx'), TemplateNative.templateBotao())
            fs.writeFileSync(path.join(base, 'components', 'inputs', 'inputReu.tsx'), TemplateNative.templateInput())
            fs.writeFileSync(path.join(base, 'components', 'cards', 'cardReu.tsx'), TemplateNative.templateCard())
            fs.writeFileSync(path.join(base, 'components', 'modals', 'modalReu.tsx'), TemplateNative.templateModal())
            fs.writeFileSync(path.join(base, 'components', 'images', 'imgReu.tsx'), TemplateNative.templateImagem())
            fs.writeFileSync(path.join(base, 'components', 'lists', 'listaReu.tsx'), TemplateNative.templateLista())
            fs.writeFileSync(path.join(base, 'components', 'texts', 'textoReu.tsx'), TemplateNative.templateTexto())
            fs.writeFileSync(path.join(base, 'components', 'headers', 'headerReu.tsx'), TemplateNative.templateHeader())
            fs.writeFileSync(path.join(base, 'components', 'badges', 'badgeReu.tsx'), TemplateNative.templateBadge())
            fs.writeFileSync(path.join(base, 'components', 'dropdowns', 'dropdownReu.tsx'), TemplateNative.templateDropdown())
            fs.writeFileSync(path.join(base, 'components', 'avatars', 'avatarReu.tsx'), TemplateNative.templateAvatar())
            fs.writeFileSync(path.join(base, 'components', 'dividers', 'dividerReu.tsx'), TemplateNative.templateDivider())
            fs.writeFileSync(path.join(base, 'components', 'toasts', 'toastReu.tsx'), TemplateNative.templateToast())
            fs.writeFileSync(path.join(base, 'components', 'loadings', 'loadingReu.tsx'), TemplateNative.templateLoading())
        } else {
            fs.writeFileSync(path.join(base, 'components', 'buttons', 'botaoReu.tsx'), TemplateWeb.templateBotaoWeb())
            fs.writeFileSync(path.join(base, 'components', 'inputs', 'inputReu.tsx'), TemplateWeb.templateInputWeb())
            fs.writeFileSync(path.join(base, 'components', 'cards', 'cardReu.tsx'), TemplateWeb.templateCardWeb())
            fs.writeFileSync(path.join(base, 'components', 'modals', 'modalReu.tsx'), TemplateWeb.templateModalWeb())
            fs.writeFileSync(path.join(base, 'components', 'images', 'imgReu.tsx'), TemplateWeb.templateImagemWeb())
            fs.writeFileSync(path.join(base, 'components', 'lists', 'listaReu.tsx'), TemplateWeb.templateListaWeb())
            fs.writeFileSync(path.join(base, 'components', 'texts', 'textoReu.tsx'), TemplateWeb.templateTextoWeb())
            fs.writeFileSync(path.join(base, 'components', 'headers', 'headerReu.tsx'), TemplateWeb.templateHeaderWeb())
            fs.writeFileSync(path.join(base, 'components', 'badges', 'badgeReu.tsx'), TemplateWeb.templateBadgeWeb())
            fs.writeFileSync(path.join(base, 'components', 'loadings', 'loadingReu.tsx'), TemplateWeb.templateLoadingWeb())
        }

        vscode.window.showInformationMessage(`✅ Albertool: estrutura ${plataforma} criada com sucesso! 🚀`)
    })

    context.subscriptions.push(comando)
}

export function deactivate() {}