pipeline {
  agent {
    docker {
     image 'node:14.15.1-alpine3.10'
     args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true'
    HOME = '.'
    npm_config_cache = 'npm-cache'
  }
  stages {
    stage('clear cache') {
      steps {
        sh 'npm cache clean --force'
      }
    }
    stage('Delete node_modules') {
      steps {
        sh 'rm -rf node_modules'
      }
    }
    stage('Install Packages') {
      steps {
        sh 'npm install'
      }
    }
    stage('node-sass rebuilding') {
      steps{
        sh 'npm rebuild node-sass'
      }
    }
    stage('Test and Build') {
      parallel {
        stage('Run Tests') {
          steps {
            //sh 'npm run test'
            echo 'a test was supposed to happen'
          }
        }
        stage('Create Build Artifacts') {
          steps {
            sh 'npm run build'
          }
        }
      }
    }

stage('Production') {
  steps {
    withAWS(region:'US-EAST-1',credentials:'AWSCredentialsID') {
    s3Delete(bucket: 'robert-connell-batch-906', path:'**/*')
    s3Upload(bucket: 'robert-connell-batch-906', workingDir:'build', includePathPattern:'**/*');
            }
          }
        }
    }
}