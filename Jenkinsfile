pipeline {
    agent any
    environment {
        K6_API_TOKEN=credentials("K6_API_TOKEN")
     }
    stages {
        stage('Performance Testing') {
            steps {
                
             bat 'k6 login cloud --token ${K6_API_TOKEN}'
                bat 'k6 run -o cloud script.js'
             }
        }
    }
}
