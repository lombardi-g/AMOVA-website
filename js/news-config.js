// ============================================================
//  CONFIGURAÇÃO DAS NOTÍCIAS (Planilha do Google)
// ============================================================
//
//  COMO FUNCIONA:
//  O operador cadastra as notícias numa Planilha Google e o site
//  busca essa planilha sozinho. NÃO é preciso mexer em código HTML.
//
//  ----------------------------------------------------------
//  PASSO A PASSO (uma única vez):
//
//  1. Crie uma Planilha Google nova.
//
//  2. Na primeira linha, escreva exatamente estes títulos de coluna:
//
//        manchete | descricao | texto | data | photo
//
//  3. Cada notícia é uma LINHA. A notícia mais nova fica no topo.
//        - manchete : título da notícia
//        - descricao: resumo curto (aparece no card)
//        - texto    : texto completo (aparece na página da notícia)
//        - data     : data (ex.: 29/12/2023 ou 2026-05)
//        - photo    : link da imagem (do Google Drive ou qualquer site)
//
//  4. Menu da planilha: Arquivo → Compartilhar → Publicar na web
//        - Em "Vincular", escolha a aba da planilha
//        - Formato: Valores separados por vírgula (.csv)
//        - Clique em "Publicar" e copie o link gerado.
//
//  5. Cole esse link entre as aspas abaixo, em NEWS_CSV_URL.
//
//  Pronto! A partir daí, toda notícia adicionada na planilha
//  aparece no site automaticamente.
//
//  Enquanto NEWS_CSV_URL estiver vazio, o site mostra as notícias
//  fixas que já estão escritas no HTML (modo de segurança).
// ============================================================

const NEWS_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSenNJP6LWP0J27Klse0vHoUUh3hpVSEHHl_eGZtmkWWWxwOwmbprXC9H8HjjyXUMbRKp8nTvjpd-Dl/pub?gid=0&single=true&output=csv";
