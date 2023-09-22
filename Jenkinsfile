pipeline {
    agent any

    tools {nodejs "NodeJS"}
    parameters {
        gitParameter name: 'TAG',
                        type: 'PT_TAG',
                        defaultValue: 'master'
    }   
    stages {
        stage('Hello') {
            steps {
                echo 'Hello..'
            }
        }
        stage('Build') {
            when {
                branch "rollup*"
            }
            steps {
                sh 'yarn install'
                sh 'yarn run build'
                echo "Building $BRANCH_NAME"
                sh 'echo //registry.npmjs.org/:_authToken=${NPM_TOKEN}'
                sh 'npm publish' 
                echo "${params.BRANCH_TAG}"
            }
        }

    }
}