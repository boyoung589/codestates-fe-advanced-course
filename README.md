# codestates-fe-advanced-course

- 완성된 GIF 파일 및 배포 링크
  - https://prismatic-kulfi-1743d0.netlify.app/
  - ![Ph5E573697](https://user-images.githubusercontent.com/85835359/183122059-90a44eb9-635b-478c-964d-0da7c8371c3f.gif)
  - ![f1u57eefMl](https://user-images.githubusercontent.com/85835359/183122067-09cbaaa8-cfb3-4272-9fd1-2c2ae258c6b9.gif)
  - ![97ZvLvnWks](https://user-images.githubusercontent.com/85835359/183122078-b2b8d18f-961e-41e9-b7c3-3d8fefbc5e45.gif)
  - ![q1bj59REDC](https://user-images.githubusercontent.com/85835359/183122087-dadf0624-cf49-4ea8-a141-0f0420bfce87.gif)
  - ![fLJMfa37md](https://user-images.githubusercontent.com/85835359/183122098-e137d192-0647-43b0-b600-266bbb69cb70.gif)


- 사용한 스택 목록
  - react, axios, redux, styled-component, redux-tookit, js, html, css
   
- 구현한 기능 목록 (Software Requirement Specification)
  - 더미데이터 불러오기
  - 해당 포스트에 따른 댓글목록 불러오기
  - 포스트-유저 아이디를 이용하여 유저정보 불러오기
  - 해당 포스트 클릭시 상세 포스트 불러오기
  - 반응형 박스사이즈 변동

- 구현 방법 혹은 구현하면서 어려웠던 점 
  - 로컬에선 사이즈가 맞아보였는데 배포하니 사이즈가 안맞는 부분이 있어서 어려웠습니다.

- 성능 최적화에 대해서 고민하고 개선한 방법
  - 한번에 로딩되어 빌드 시 시간 초과되는 부분을 개선하기 위해 lazy와 suspense를 사용했습니다.

- 추가 구현 사항에 대한 구현 방법과 설명
  - 불러온 데이터를 쪼개어 페이지 분할하여 넣는 페이지네이션을 구현했습니다.
