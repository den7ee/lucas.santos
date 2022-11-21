import { Accordion } from './Accordion';
import { useTranslation } from 'react-i18next';
import React from 'react';

function SkillSection() {
  const { t } = useTranslation();
  return (
    <div className='bg-white rounded-md max-w-xl mx-auto p-4 -mt-7'>
      <div className='text-black text-center p-2'>
        <h2 className=' text-black text-2xl'>{t("Tech Skills")}</h2>
        <p className='text-neutral-700'>{t("Click for show/hide details")}</p>
      </div>
        <div className='ml-28'>
          <Accordion 
          icon='logos:react' 
          starRating={5}
          contentP1={t(" - Criar um projeto com 'npx create-react-app';")}
          contentP2={t(" - Utilizar o framework i18n para Um projeto multi linguagem;")}
          contentP3={t(" - Interpretar e customizar outros projetos  para a finalidade do meu projeto atual;")}
          contentP4={t(" - Configurar e utilizar o comando 'npm run dev' para iniciar o server;")}
          />
          
          <Accordion 
          icon="logos:angular-icon" 
          starRating={4}
          contentP1={t(" - Instalar via yarn ou npm;")}
          contentP2={t(" - Utilizar a CLI para atividades básicas como criar componentes e iniciar o server;")}
          contentP3={t(" - Identificar e customizar os arquivos html, de estilo e de scripts;")}
          />

          <Accordion 
          icon="vscode-icons:file-type-vite" 
          starRating={3}
          contentP1={t(" - Criar um projeto em React ou Angular com 'npm/yarn create vite@latest';")}
          contentP2={t(" - Criar e configurar o arquivo vite.config.js;")}
          contentP3={t(" - Instalar os pacotes do package.json com 'npm/yarn i';")}
          />

          <Accordion 
          icon="logos:tailwindcss-icon" 
          starRating={4}
          contentP1={t(" - Instalar via npm ou yarn;")}
          contentP2={t(" - Configurar o arquivo tailwind.conf.cjs;")}
          contentP3={t(" - Estilizar fontes e cores;")}
          contentP4={t(" - Criar e posicionar os elementos de acordo com o projeto;")}
          />

          <Accordion 
          icon="vscode-icons:file-type-sass" 
          starRating={4}
          contentP1={t(" - Armazenar e utilizar variáveis;")}
          contentP2={t(" - Criar e reutilizar CSS com Mixins;")}
          contentP3={t(" - Utilizar @if e @else  para adicionar lógica aos estilos;")}
          contentP4={t(" - Dividir os arquivos de estilos em arquivos menores;")}
          />

          <Accordion 
          icon="logos:bootstrap" 
          starRating={3}
          contentP1={t(" - Importar os arquivos .css e .js em um projeto;")}
          contentP2={t(" - Aplicar o conceito de 'Container' e o 'Sistema de Grid' necessários para posicionar os elementos;")}
          contentP3={t(" - Utilizar os elementos em um projeto com base na documentação;")}
          />
          
          <Accordion icon="vscode-icons:file-type-vscode" starRating={4}
          contentP1={t(" - Instalar ou usar online em https://vscode.dev/;")}
          contentP2={t(" - Adicionar plugins e usar teclas de atalho básicas;")}
          contentP3={t(" - Criar um projeto inicial ou abrir um diretório de um projeto já existente;")}
          contentP4={t(" - Abrir um terminal Bash para usar CLIs;")}
          />
          
          <Accordion icon="logos:git-icon" starRating={4}
          contentP1={t(" - Instalar, usar a CLI e  iniciar um repositório com o comando 'git init';")}
          contentP2={t(" - Adicionar as mudanças do repositório com o comando 'git add' e 'git commit';")}
          contentP3={t(" - Vincular um repositório local a um repositório online do GitHub ou GitLab com 'git remote origin';")}
          />

          <Accordion icon="vscode-icons:file-type-typescript-official" starRating={3}
          contentP1={t(" - Aplicar o conceito de escopo para declaração e utilização de funções e variáveis;")}
          contentP2={t(" - Pesquisar e adaptar trechos de código para a finalidade do meu projeto atual;")}
          contentP3={t(" - Adicionar @types de frameworks ou bibliotecas com npm ou yarn;")}
          contentP4={t(" - Utilizar tipagens básicas;")}
          />
          
        </div>
    </div>
  )
}

export default SkillSection

