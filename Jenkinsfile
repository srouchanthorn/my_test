pipeline {
    agent any
    environment {
        K6_API_TOKEN=f2feb42bc41cf39367ffc33d9a2105899c653d9b7f33e2eb402f33e1fb179483
     }
    stages {
        stage('Performance Testing') {
            steps {
                bat ' k6 login cloud -t ${K6_API_TOKEN}'
                bat 'k6 run -o cloud script.js'
             }
        }
    }
}
