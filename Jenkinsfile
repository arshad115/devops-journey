pipeline {
  agent {
    kubernetes {
      yaml '''
        apiVersion: v1
        kind: Pod
        spec:
          containers:
          - name: node
            image: node:22-alpine3.19
            command:
            - cat
            tty: true
        '''
    }
  }
  stages {
    stage('Run Tests') {
      steps {
        container('node') {
          sh 'npm ci'
          sh 'npm run build --if-present'
          sh 'npm run test'
        }
      }
    }
    stage('Scan') {
          steps {
            withSonarQubeEnv(installationName: 'sq1') {
              sh './mvnw clean org.sonarsource.scanner.maven:sonar-maven-plugin:3.9.0.2155:sonar'
            }
          }
    }
  }
}
