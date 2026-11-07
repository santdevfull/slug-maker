export const metadata = {"slug": "slug-maker", "title": "Slug Maker", "description": "Create URL-safe slugs from international text."};
export const fields = [{"name": "text", "label": "Heading", "value": "Olá Mundo! Projeto 2026"}];
export function compute(input){
  const slug=input.text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');return {slug,length:slug.length}
}
