pipeline {
	agent {
		dockerfile true
	}
	triggers {
		cron 'H/30 * * * *'
		pollSCM 'H/3 * * * *'
	}
	stages {
		stage("Build") {
			steps {
				sh "dotnet build /src"
			}
		}
	}
}