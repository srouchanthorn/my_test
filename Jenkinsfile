pipeline {
    agent any
    environment {
        K6_API_TOKEN=credentials("K6_API_TOKEN")
     }
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Running K6 performance tests...'
                 bat 'k6 login cloud --token  f2feb42bc41cf39367ffc33d9a2105899c653d9b7f33e2eb402f33e1fb179483'
                bat 'k6 cloud script.js'
                echo 'Completed Running K6 performance tests!'
            }
        }
    }
}
