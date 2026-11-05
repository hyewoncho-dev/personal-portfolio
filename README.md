# 조혜원 | 개인 개발 포트폴리오

전북대학교 컴퓨터인공지능학과 학생 조혜원의 개인 개발 포트폴리오입니다.

프로그래밍, 웹 개발, 인공지능, 정보보안 분야에 관심을 가지고 학습한 내용과 프로젝트 경험을 정리하고 있습니다.

## 🌐 Portfolio

- **Website:** https://hyewoncho-dev.github.io/personal-portfolio/
- **GitHub:** https://github.com/hyewoncho-dev
- **Repository:** https://github.com/hyewoncho-dev/personal-portfolio

## 👩‍💻 About Me

- 전북대학교 컴퓨터인공지능학과
- 2025학번
- 관심 분야: Web Development, Artificial Intelligence, Information Security

새로운 기술을 배우는 데 그치지 않고 직접 구현하고 문제를 해결하는 과정을 중요하게 생각합니다. 프로젝트를 진행하면서 배운 내용을 실제 서비스에 적용하고 개발 역량을 키우고 있습니다.

## 🎯 Interests & Goals

- **Web Development:** 사용자가 편리하게 이용할 수 있는 웹 서비스와 인터페이스 구현에 관심이 있습니다.
- **Artificial Intelligence:** 인공지능 기술을 활용해 실제 문제를 해결하는 서비스 개발에 관심이 있습니다.
- **Information Security:** 컴퓨터 시스템과 네트워크의 보안 원리를 이해하고 안전한 소프트웨어 개발 역량을 쌓고 싶습니다.

앞으로 자료구조와 알고리즘, 컴퓨터 시스템 등 전공 기초를 꾸준히 학습하고, 웹 개발과 인공지능 프로젝트를 직접 구현하며 경험을 넓히는 것이 목표입니다.

## 🛠 Tech Stack

### Languages
- Python
- JavaScript
- HTML
- CSS

### Frameworks & Tools
- Vue.js
- React
- Firebase
- Git
- GitHub
- VS Code
- Hugo

## 🚀 Projects

### 1. Zero Choice

AI 기반 소비 가치 분석 및 맞춤형 상품 추천 프로젝트입니다.

- 소비 가치에 따른 상품 분석
- 개인의 소비 성향을 고려한 대안 제안
- GitHub: https://github.com/hyewoncho-dev/TBMCamp2026

### 2. Professor Research Note

교수의 연구 및 경력 정보를 검색하고 확인할 수 있는 프로젝트입니다.

- 교수 정보 검색 및 후보 확인
- 연구 및 경력 정보 수집
- 담당 역할: 프론트엔드 화면 및 사용자 인터랙션 개발
- GitHub: https://github.com/hyewoncho-dev/Hackathon2026
- Demo: https://hackathone-pied.vercel.app/

### 3. Mini Todo App

React와 Firebase를 활용한 할 일 관리 웹 애플리케이션입니다.

- 사용자 인증
- Firestore를 활용한 할 일 데이터 관리
- GitHub: https://github.com/hyewoncho-dev/mini-todo

### 4. Movie Lab

Vue.js와 TMDB API를 활용한 영화 정보 웹 프로젝트입니다.

- 영화 정보 검색 및 조회
- Vue.js 기반 웹 애플리케이션
- GitHub: https://github.com/hyewoncho-dev/movie-lab-actions

### 5. GitHub Practice

Git과 GitHub의 기본적인 협업 및 버전 관리 기능을 학습한 프로젝트입니다.

- Git Flow
- Branch 및 Pull Request 실습
- GitHub: https://github.com/hyewoncho-dev/github-practice2

## 🖥 Development Environment

실제 개발 및 빌드에 사용한 환경입니다.

| 항목 | 버전 및 환경 |
|---|---|
| OS | Windows 64-bit |
| Git | 2.55.0.windows.5 |
| Hugo Extended | 0.169.0 |
| Python | 3.13.1 |
| Deployment | GitHub Pages |
| CI/CD | GitHub Actions |

GitHub Actions에서도 Hugo Extended 0.169.0을 사용합니다.

## 📦 Installation & Local Development

### 1. 저장소 복제

```bash
git clone https://github.com/hyewoncho-dev/personal-portfolio.git
cd personal-portfolio
```

### 2. Hugo Extended 설치

Hugo Extended 0.169.0을 설치하고 실행 경로를 PATH에 등록합니다.

공식 설치 안내: https://gohugo.io/installation/

### 3. 로컬 서버 실행

```bash
hugo server -D
```

브라우저에서 다음 주소로 접속합니다.

```text
http://localhost:1313/
```

### 4. 배포용 빌드

```bash
hugo --minify
```

빌드 결과물은 `public/` 폴더에 생성됩니다.

## 📁 Main File Structure

| 경로 | 설명 |
|---|---|
| `hugo.toml` | 사이트 기본 설정, 언어, 메뉴, 테마 설정 |
| `content/about.md` | 자기소개 페이지 |
| `content/projects.md` | 프로젝트 소개 페이지 |
| `content/contact.md` | 연락처 페이지 |
| `content/posts/` | 블로그 게시글 |
| `static/` | 이미지 및 정적 파일 |
| `themes/template/` | Hugo Coder 테마 파일 |
| `.github/workflows/hugo.yml` | GitHub Actions 자동 배포 설정 |
| `public/` | Hugo 빌드 결과물 |

## 🚀 Deployment

GitHub Pages와 GitHub Actions를 이용해 사이트를 배포합니다.

1. 로컬에서 콘텐츠 또는 설정 파일을 수정합니다.
2. 변경 사항을 Git에 커밋합니다.
3. `main` 브랜치에 push합니다.
4. GitHub Actions가 자동으로 실행됩니다.
5. 빌드와 배포 작업이 성공했는지 확인합니다.
6. 배포된 사이트에 접속해 변경 사항을 확인합니다.

배포 워크플로 파일:

`.github/workflows/hugo.yml`

GitHub Actions 실행 기록:

https://github.com/hyewoncho-dev/personal-portfolio/actions

배포 사이트:

https://hyewoncho-dev.github.io/personal-portfolio/

## 🎨 Theme & License

이 사이트는 Hugo 정적 사이트 생성기와 Hugo Coder 테마를 기반으로 제작했습니다.

- Theme: Hugo Coder
- Author: Luiz F. A. de Prá
- Repository: https://github.com/luizdepra/hugo-coder
- License: MIT License
- Copyright: Copyright (c) 2018 Luiz F. A. de Prá

테마의 저작권 표시 및 MIT 라이선스 전문은 `themes/template/LICENSE.md` 파일에 포함되어 있습니다.

## 📬 Contact

- Email: hyewoncho1@jbnu.ac.kr
- GitHub: https://github.com/hyewoncho-dev

---

꾸준히 배우고 기록하며 성장하는 개발자가 되겠습니다.