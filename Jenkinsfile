pipeline {
    agent any
    environment {
        K6_API_TOKEN=credentials("K6_API_TOKEN")
     }
    stages {
        stage('Performance Testing') {
            steps {
                echo 'Running K6 performance tests...'
                 bat 'k6 login cloud --token ${K6_API_TOKEN}'
                bat 'k6 cloud script.js'
                echo 'Completed Running K6 performance tests!'
            }
        }
    }
}
