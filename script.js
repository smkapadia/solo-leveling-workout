/* script.js */

document.addEventListener('DOMContentLoaded', () => {
  // Global variables to simulate user progress
  window.userXP = 0;
  window.userLevel = 0;
  
  // Profile form handling
  const profileForm = document.getElementById('profileForm');
  const profileDisplay = document.getElementById('profileDisplay');
  
  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const goals = document.getElementById('goals').value;
    
    // For demo, simply display the profile info
    profileDisplay.innerHTML = `
      <h3>Your Profile:</h3>
      <p>Name: ${name}</p>
      <p>Date of Birth: ${dob}</p>
      <p>Height: ${height} cm</p>
      <p>Weight: ${weight} kg</p>
      <p>Fitness Goals: ${goals}</p>
    `;
  });
  
  // Initial Fitness Assessment
  const startAssessment = document.getElementById('startAssessment');
  const assessmentResult = document.getElementById('assessmentResult');
  
  startAssessment.addEventListener('click', () => {
    // Simulate an assessment score (1-100)
    const assessmentScore = Math.floor(Math.random() * 100) + 1;
    assessmentResult.innerHTML = `<p>Your fitness assessment score is: ${assessmentScore}</p>`;
    // Set initial XP and level based on assessment (placeholder logic)
    window.userXP = assessmentScore;
    window.userLevel = Math.floor(assessmentScore / 10);
    updateDailyWorkout();
  });
  
  // Daily Workout generation
  const workoutDescription = document.getElementById('workoutDescription');
  const completeWorkoutBtn = document.getElementById('completeWorkout');
  
  completeWorkoutBtn.addEventListener('click', () => {
    // Increase XP for completing the workout
    window.userXP += 10;
    
    // Check for level up and boss battle unlock (every 10 levels)
    const newLevel = Math.floor(window.userXP / 10);
    if(newLevel > window.userLevel) {
      window.userLevel = newLevel;
      if(window.userLevel % 10 === 0) {
        alert("Boss Battle Workout Unlocked! Prepare for an extra challenge.");
      }
    }
    
    updateDailyWorkout();
    updateChartData();
  });
  
  function updateDailyWorkout() {
    // Generate a simple workout message based on level (placeholder logic)
    let workoutMsg = "Do 10 push-ups, 15 squats, and 20 jumping jacks.";
    if(window.userLevel > 5) {
      workoutMsg = "Do 15 push-ups, 20 squats, and 25 jumping jacks.";
    }
    workoutDescription.innerText = workoutMsg;
  }
  
  // Penalty System
  const penaltyDisplay = document.getElementById('penaltyDisplay');
  
  // Function to apply penalty
  function applyPenalty(missedDays) {
    if(missedDays === 1) {
      window.userXP -= 5;
      penaltyDisplay.innerText = "Penalty: 5 XP deducted for missing 1 day.";
    } else if(missedDays >= 2) {
      window.userXP -= 5;
      penaltyDisplay.innerText = "Penalty: 5 XP deducted and extra workout assigned for missing 2+ days.";
      // Here, you could add logic to assign an extra workout challenge.
    }
    updateChartData();
  }
  
  // For demonstration, simulate a penalty after 5 seconds
  setTimeout(() => {
    applyPenalty(1);
  }, 5000);
  
  // Progress Tracking with Chart.js
  const ctx = document.getElementById('progressChart').getContext('2d');
  let chartData = {
    labels: ["Initial"],
    datasets: [{
      label: 'XP',
      data: [window.userXP],
      backgroundColor: '#ff8c00'
    }]
  };
  
  let progressChart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
    }
  });
  
  function updateChartData() {
    // For demo: update chart with current XP
    chartData.labels.push(`Level ${window.userLevel}`);
    chartData.datasets[0].data.push(window.userXP);
    progressChart.update();
  }
  
  // Inventory System
  const inventoryForm = document.getElementById('inventoryForm');
  const inventoryList = document.getElementById('inventoryList');
  
  inventoryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const itemName = document.getElementById('itemName').value;
    if(itemName) {
      const li = document.createElement('li');
      li.textContent = itemName;
      inventoryList.appendChild(li);
      document.getElementById('itemName').value = '';
    }
  });
  
  // Nutrition & Hydration Tracking
  const nutritionForm = document.getElementById('nutritionForm');
  const hydrationForm = document.getElementById('hydrationForm');
  const nutritionDisplay = document.getElementById('nutritionDisplay');
  
  nutritionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const meal = document.getElementById('meal').value;
    if(meal) {
      const p = document.createElement('p');
      p.textContent = `Meal: ${meal}`;
      nutritionDisplay.appendChild(p);
      document.getElementById('meal').value = '';
    }
  });
  
  hydrationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const waterIntake = document.getElementById('waterIntake').value;
    if(waterIntake) {
      const p = document.createElement('p');
      p.textContent = `Water Intake: ${waterIntake} ml`;
      nutritionDisplay.appendChild(p);
      document.getElementById('waterIntake').value = '';
    }
  });
});
