pipeline {
    agent any

    environment {
    GIT_MESSAGE = get_commit_msg()
    }

    tools {nodejs "NodeJS"}
  
    stages {
        stage('Hello') {
            steps {
                echo 'Hello...'
            }
        }
        stage('Build') {
            steps {   
                      sh "git log -1"
              
             
      
                script {
                    def npmVersion = get_npm_version()
                    echo "${npmVersion}"
               echo "${env.GIT_MESSAGE}"
                    echo "${env.GIT_MESSAGE}"
                   echo "${env.GIT_COMMIT}"
               echo "${GIT_COMMIT}"
               def isUpdate = get_commit_subject("Update")
               def isFeature = get_commit_subject("Feature")
               def isMajor = isFeature == 0
               echo "${isUpdate}"
               echo "${isFeature}"
                echo "${isMajor}"
            //    if(isMajor){
            //     sh "npm version major"
            //    } else {
            //     sh "npm version minor"
            //    }
               sh "git tag"
               sh "git commit -m "test""
               sh "git push origin ${BRANCH_NAME}"
               sh "git push origin --tags"
               sh "npm publish"

                }
            }
        }


    }
}

def get_commit_msg(){
    script{
        return sh(script:"git show -s --format=%B ${env.GIT_COMMIT}", returnStdout:true).trim()
    }
}

def get_commit_subject(subject){
        script{
        return sh(script:"git show -s --format=%B ${env.GIT_COMMIT}", returnStdout:true).trim().indexOf(subject)
    }
}

def get_commit_author(){
    script{
        return sh(script:"git --no-pager show -s --format=%an ${env.GIT_COMMIT}",returnStdout:true).trim()
    }
}

def get_npm_version(){
    script{
        return sh(script:"npm show dummy-jenkins version",returnStdout:true).trim()
    }
}