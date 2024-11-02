// Array contendo os rótulos de qualidade
const qualityLabels = ['Boa', 'Moderada', 'Ruim', 'Muito Ruim', 'Péssima'];

// Função que retorna o rótulo de qualidade com base no índice fornecido
export function getQualityLabel(index) {
    // Verifica o índice e retorna o rótulo de qualidade correspondente
    if (index <= 40) return qualityLabels[0]; // Se o índice for 40 ou menor, retorna 'Boa'
    if (index <= 80) return qualityLabels[1]; // Se o índice estiver entre 41 e 80, retorna 'Moderada'
    if (index <= 120) return qualityLabels[2]; // Se o índice estiver entre 81 e 120, retorna 'Ruim'
    if (index <= 200) return qualityLabels[3]; // Se o índice estiver entre 121 e 200, retorna 'Muito Ruim'
    return qualityLabels[4]; // Para índices acima de 200, retorna 'Péssima'
}
