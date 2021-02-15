pipeline {
    agent any
    environment {
        K6_API_TOKEN=credentials("K6_API_TOKEN")
     }
    stages {
        stage('Performance Testing') {
            steps {
                
             echo ' ${K6_API_TOKEN}'
                bat 'k6 run   script.js'
             }
        }
    }
}
