const qualityLabels = ['Boa', 'Moderada', 'Ruim', 'Muito Ruim', 'Péssima'];

export function getQualityLabel(index) {
    if (index <= 40) return qualityLabels[0];
    if (index <= 80) return qualityLabels[1];
    if (index <= 120) return qualityLabels[2];
    if (index <= 200) return qualityLabels[3];
    return qualityLabels[4];
}