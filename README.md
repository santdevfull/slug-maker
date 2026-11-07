# Slug Maker

Create URL-safe slugs from international text.

## Run

npm test and python -m http.server 8000 (visit http://localhost:8000)

## Example input (JSON)

{
  "text": "Olá Mundo! Projeto 2026"
}

## Expected output fields (JSON)

{
  "slug": "ola-mundo-projeto-2026",
  "length": 22
}

## Engineering

Standalone functional implementation, automated CI tests and no third-party runtime dependencies. Educational portfolio example: review for production readiness before deployment.

MIT License - https://github.com/santdevfull
