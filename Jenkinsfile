pipeline {
  agent any
  stages {
    stage('Performance Testing') {
      steps {
        bat 'k6 login cloud -t f2feb42bc41cf39367ffc33d9a2105899c653d9b7f33e2eb402f33e1fb179483'
        bat 'k6 login cloud -t ${K6_API_TOKENS}'
        bat 'k6 run -o cloud script.js'
      }
    }

  }
  environment {
    K6_API_TOKENS = 'f2feb42bc41cf39367ffc33d9a2105899c653d9b7f33e2eb402f33e1fb179483'
  }
}