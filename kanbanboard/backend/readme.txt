	1. backend
		1) 테스트(개발 모드)
			eclipse Ctrl+F11 (스프링부트 애플리케이션 실행)
	
		2) 빌드(배포)
		   # mvn -f kanbanboard/backend exec:exec clean package
		   
		   테스트
		   # java -Dspring.profiles.active=production -jar kanbanboard/backend/target/kanbanboard.jar
		   
							===============================================================
	
	2. ssh 연결(ssh key 인증)
		
		1) key 생성
			$ ssh-keygen -t rsa -b 2048 -m PEM -C "yoon@gmail.com"
			$ ssh-keygen -t ecdsa -b 512 -m PEM -C "yoon@gmail.com"		(Mac)
		
		2) key 생성 확인
			- ~/.ssh/id_rsa : private key
			- ~/.ssh/id_rsa.pub : public key
		
		3) 공개키를 서버에 설치하기
			# mv ~/.ssh/id_rsa.pub ~/.ssh/authorized_keys
			# mv ~/.ssh/id_ecdsa.pub ~/.ssh/authorized_keys		(Mac)
			
		4) 키로 연결 테스트
			# ssh -i mykey.pem root@192.168.64.2
				
		
		5) jenkins
			- Publish over SSH 플러그인 설치 - jenkins에 plugin이 없어서 다운받음(jenkins/manage/pluginManager에서 필요한 플로그인 다운)
			- Publish over SSH 플로그인 ssh server 등록 (name: springboot-publish-server)
			- 프로젝트의 빌드 후 조치(post-build action) 설정 - Send build artifacts over SSH
			  kanbanboard.jar: transfer
			  launch.sh: transfer + execution
	
							===============================================================
	
	3. frontend
	    1) 설치
		   - 개발툴
	       	$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass babel-loader @babel/core @babel/cli @babel/preset-env @babel/preset-react case-sensitive-paths-webpack-plugin
	       - library
	      	$ npm i react react-dom prop-types styled-components react-addons-update
	    2) 설정
	       - webpack.config.js
	       - babel.config.json
	    3) npm 스크립팅
	       "scripts": {
	    		"debug": "npx webpack serve --config config/webpack.config.js --progress --mode development --env",
	    		"build": "npx webpack --config config/webpack.config.js --mode production"
	  		}
	  	4) 테스트(개발 모드)
	  	   $ npm start
	  	   
	  	5) 빌드(배포)
	  	   $ npm run build    	   
			