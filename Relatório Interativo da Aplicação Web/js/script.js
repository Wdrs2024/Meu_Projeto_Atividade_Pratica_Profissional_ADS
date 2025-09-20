document.addEventListener('DOMContentLoaded', function () {
            const ctx = document.getElementById('techStackChart').getContext('2d');
            
            const data = {
                labels: ['Linguagens/Ferramentas', 'Frameworks', 'Estilização'],
                datasets: [{
                    label: 'Distribuição de Tecnologias',
                    data: [4, 2, 1],
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.7)',
                        'rgba(16, 185, 129, 0.7)',
                        'rgba(139, 92, 246, 0.7)',
                    ],
                    borderColor: [
                        'rgba(59, 130, 246, 1)',
                        'rgba(16, 185, 129, 1)',
                        'rgba(139, 92, 246, 1)',
                    ],
                    borderWidth: 1,
                    hoverOffset: 4
                }]
            };

            const config = {
                type: 'doughnut',
                data: data,
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: {
                                font: {
                                    family: "'Inter', sans-serif",
                                    size: 14
                                },
                                color: '#475569'
                            }
                        },
                        tooltip: {
                            titleFont: {
                                family: "'Inter', sans-serif"
                            },
                            bodyFont: {
                                family: "'Inter', sans-serif"
                            }
                        }
                    }
                },
            };

            new Chart(ctx, config);
        });