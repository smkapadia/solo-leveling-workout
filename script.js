// script.js

document.addEventListener('DOMContentLoaded', () => {
  // If you want to use Chart.js for progress:
  // 1. Add <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> in index.html
  // 2. Then create a chart below

  // Example: create a basic bar chart
  const ctx = document.getElementById('progressChart');
  if (ctx) {
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Level 1', 'Level 2', 'Level 3'],
        datasets: [
          {
            label: 'XP',
            data: [100, 200, 300],
            backgroundColor: '#ff8c00'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            ticks: {
              color: '#ffffff'
            },
            grid: {
              color: '#444444'
            }
          },
          x: {
            ticks: {
              color: '#ffffff'
            },
            grid: {
              color: '#444444'
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#ffffff'
            }
          }
        }
      }
    });
  }

  // Handle "Complete" button clicks
  const completeButtons = document.querySelectorAll('.complete-btn');
  completeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // For demo: show an alert, or actually mark the task as done
      alert('Task completed! You gained some XP.');
      // You could also update your chart data here
    });
  });
});
