from pathlib import Path

root = Path('.')
output_path = root / 'estrutura_e_codigo.md'
text_exts = {'.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.md', '.html', '.txt', '.env', '.lock', '.gitignore', '.yaml', '.yml', '.xml', '.svg', '.json5', '.ini'}

all_files = [p for p in sorted(root.rglob('*')) if p.is_file()]

lines = ['# Estrutura de Pastas e Código do Projeto', '']
lines.append('## Árvore de Diretórios')
lines.append('')


def build_tree(paths):
    tree = {}
    for path in paths:
        parts = path.parts
        node = tree
        for part in parts:
            node = node.setdefault(part, {})
    return tree


tree = build_tree([p.relative_to(root) for p in all_files])


def render(node, prefix=''):
    names = sorted(node.keys(), key=lambda s: (s.lower(), s))
    for idx, name in enumerate(names):
        last = idx == len(names) - 1
        connector = '└── ' if last else '├── '
        lines.append(prefix + connector + name)
        child = node[name]
        if child:
            extension = '    ' if last else '│   '
            render(child, prefix + extension)

render(tree)
lines.append('')
lines.append('## Conteúdo dos Arquivos')
lines.append('')

for path in all_files:
    rel = path.relative_to(root)
    ext = path.suffix.lower()
    include = ext in text_exts
    if not include:
        try:
            path.open('r', encoding='utf-8').read(1024)
            include = True
        except Exception:
            include = False
    if include:
        lines.append(f'### `{rel}`')
        lines.append('```')
        try:
            text = path.read_text(encoding='utf-8')
        except UnicodeDecodeError:
            try:
                text = path.read_text(encoding='latin-1')
            except Exception as e:
                text = f'Erro ao ler arquivo: {e}'
        lines.append(text.rstrip())
        lines.append('```')
        lines.append('')

output_path.write_text('\n'.join(lines), encoding='utf-8')
print(f'Gerado: {output_path.resolve()}')
