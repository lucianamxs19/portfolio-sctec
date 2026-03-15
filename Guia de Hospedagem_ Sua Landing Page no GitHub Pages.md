# Guia de Hospedagem: Sua Landing Page no GitHub Pages

Olá, Luciana! Como seu mentor, vou te guiar no processo de colocar sua landing page online usando o **GitHub Pages**. Esta é uma excelente forma de hospedar projetos estáticos gratuitamente e demonstrar suas habilidades de controle de versão (Git) para futuros empregadores.

Siga os passos abaixo com atenção:

## Passo 1: Crie um Novo Repositório no GitHub

Se você ainda não tem um repositório para este projeto, precisará criar um. Se já tem, pode pular para o Passo 2.

1.  Acesse seu GitHub: [https://github.com/lucianamxs19](https://github.com/lucianamxs19)
2.  No canto superior direito, clique no sinal de `+` e selecione `New repository`.
3.  **Nome do Repositório**: Escolha um nome claro, por exemplo, `portfolio-sctec`.
4.  **Descrição**: Adicione uma breve descrição, como "Minha landing page de portfólio desenvolvida para o curso de Introdução à Programação Front e Back-End da SCTec."
5.  **Público/Privado**: Mantenha-o **Público** para que o GitHub Pages funcione.
6.  **README**: **Não** marque a opção para adicionar um README neste momento, pois já temos um no seu projeto.
7.  Clique em `Create repository`.

## Passo 2: Suba os Arquivos do Seu Projeto para o Repositório

Agora você precisa colocar os arquivos da sua landing page (HTML, CSS, JS, README.md) no repositório que acabou de criar.

### Opção A: Usando a Interface Web do GitHub (Mais Fácil para Iniciantes)

1.  Na página do seu novo repositório no GitHub, você verá uma opção `uploading an existing file` ou `Add file` > `Upload files`.
2.  Clique nesta opção.
3.  Arraste e solte todos os arquivos da pasta `portfolio` (ou clique em `choose your files`) para a área indicada. Certifique-se de incluir `index.html`, `style.css`, `script.js` e `README.md`.
4.  Na parte inferior da página, adicione uma mensagem de commit (ex: "Primeiro upload da landing page") e clique em `Commit changes`.

### Opção B: Usando o Git no Terminal (Recomendado para Prática)

Se você já tem o Git instalado e configurado, esta é a forma mais profissional:

1.  Abra o terminal na pasta raiz do seu projeto (`/home/ubuntu/portfolio`).
2.  Inicialize um repositório Git local (se ainda não o fez):
    ```bash
    git init
    ```
3.  Adicione todos os arquivos ao "stage" do Git:
    ```bash
    git add .
    ```
4.  Faça o primeiro commit:
    ```bash
    git commit -m "Primeiro commit da landing page do portfólio SCTec"
    ```
5.  Conecte seu repositório local ao repositório remoto no GitHub (substitua `SEU_USUARIO` e `SEU_REPOSITORIO` pelos seus dados):
    ```bash
    git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
    ```
    *Para você, Luciana, seria algo como: `git remote add origin https://github.com/lucianamxs19/portfolio-sctec.git` (assumindo o nome do repositório como `portfolio-sctec`)*

6.  Envie seus arquivos para o GitHub:
    ```bash
    git push -u origin main
    ```
    *(Ou `master`, dependendo da branch padrão do seu repositório)*

## Passo 3: Ative o GitHub Pages

Com os arquivos no GitHub, agora vamos ativar a hospedagem:

1.  Na página do seu repositório no GitHub, clique na aba `Settings`.
2.  No menu lateral esquerdo, clique em `Pages`.
3.  Em `Source`, selecione a branch `main` (ou `master`) e a pasta `/ (root)`.
4.  Clique em `Save`.

O GitHub Pages levará alguns minutos para processar e publicar seu site. Você verá uma mensagem indicando que "Your site is published at..." com o link do seu portfólio.

## Passo 4: Acesse e Compartilhe Sua Landing Page!

Após alguns minutos, seu site estará disponível em um URL como:

`https://SEU_USUARIO.github.io/SEU_REPOSITORIO/`

*Para você, Luciana, se o nome do repositório for `portfolio-sctec`, o link será algo como: `https://lucianamxs19.github.io/portfolio-sctec/`*

Parabéns! Sua landing page agora está online e acessível para todos. Você pode compartilhar este link com a SCTec, em seu currículo ou com qualquer pessoa que queira ver seu trabalho. Lembre-se de que qualquer alteração que você fizer nos arquivos e enviar para o GitHub será automaticamente atualizada no seu site hospedado (pode levar alguns minutos para propagar).
