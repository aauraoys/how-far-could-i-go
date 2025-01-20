# How Far Could I Go

프론트엔드 개발자 포트폴리오 웹사이트입니다.

## 기술 스택

- Next.js 15.1.5
- TypeScript
- Prisma (PostgreSQL)
- TailwindCSS
- Framer Motion
- Lucide Icons

## 시작하기

### 사전 요구사항

- Node.js v21.6.2 이상
- npm v10.2.4 이상
- Vercel CLI
- PostgreSQL 데이터베이스 (Vercel Postgres 또는 Neon)

### 1단계: 기본 설정

1. 리포지토리 클론
```bash
git clone https://github.com/aauraoys/how-far-could-i-go.git
cd how-far-could-i-go
```

2. Node.js 버전 확인
```bash
node -v  # v21.6.2 이상
```

3. 의존성 설치
```bash
npm install
```

### 2단계: Vercel 설정

1. Vercel CLI 설치
```bash
npm i -g vercel
```

2. Vercel 로그인 및 프로젝트 연결
```bash
vercel login
vercel link
```

3. 환경 변수 가져오기
```bash
vercel env pull .env.local
```

### 3단계: 데이터베이스 설정

1. Vercel 대시보드에서 데이터베이스 생성
   - Storage 탭 선택
   - Connect Store 클릭
   - Neon PostgreSQL 선택
   - "Create New" 클릭

2. Prisma 설정 및 데이터베이스 초기화
```bash
# Prisma 클라이언트 생성
npx prisma generate

# 데이터베이스 스키마 적용
npx prisma db push

# 초기 데이터 입력
npm run seed

# (선택) Prisma Studio로 데이터 확인
npx prisma studio
```

### 4단계: 개발 서버 실행

```bash
# 기본 포트(3000)로 실행
npm run dev

# 특정 포트로 실행 (선택사항)
PORT=3001 npm run dev
```

- http://localhost:3000 에서 확인 가능 (또는 설정한 포트)

### 5단계: 배포

배포 전 로컬에서 빌드 테스트:
```bash
npm run build
```

Vercel을 통한 배포:
1. Vercel 대시보드 접속
2. New Project > Import Git Repository
3. 환경 변수 자동 연동 확인
4. Deploy 클릭

## 환경 변수

`.env.local` 파일에 필요한 환경 변수:
```env
DATABASE_URL="postgresql://..."  # Vercel/Neon에서 제공하는 URL
```

## 프로젝트 구조

```
├── src/
│   ├── app/
│   │   ├── api/         # API 라우트
│   │   │   └── profile/  # 프로필 데이터 API
│   │   ├── components/  # React 컴포넌트
│   │   └── page.tsx     # 메인 페이지
│   └── lib/            # 유틸리티 함수
│       └── prisma.ts   # Prisma 클라이언트
├── prisma/
│   ├── schema.prisma   # 데이터베이스 스키마
│   └── seed.ts        # 시드 데이터
└── public/            # 정적 파일
```

## 주요 기능

- 반응형 디자인
- 다크모드 지원
- 애니메이션 효과
- SSR (Server-Side Rendering)
- PostgreSQL 데이터베이스 연동

## 문제 해결

### 데이터베이스 연결 오류
- `.env.local` 파일이 존재하는지 확인
- `vercel env pull` 명령어로 최신 환경 변수 동기화
- DATABASE_URL 형식이 올바른지 확인
- `prisma generate` 명령어 실행 여부 확인
- Prisma Studio로 데이터베이스 연결 테스트

### Vercel CLI 관련 오류
- `vercel logout` 후 `vercel login` 다시 시도
- 프로젝트 연결 확인: `vercel link`
- 환경 변수 동기화: `vercel env pull .env.local`

### 빌드 오류
- `node_modules` 삭제 후 재설치
- Next.js 캐시 삭제: `rm -rf .next`
- TypeScript 캐시 삭제: `rm -rf tsconfig.tsbuildinfo`

### 포트 충돌
- 다른 포트 사용: `PORT=3001 npm run dev`
- 기존 프로세스 종료: `lsof -i :3000` 후 `kill -9 PID`

## 보안 주의사항

이 프로젝트는 public 레포지토리입니다. `.env` 파일이나 기타 민감한 정보를 절대 커밋하지 마세요.

## 환경 변수 설정

1. `.env.example` 파일을 `.env.local`로 복사
2. Vercel에서 제공하는 실제 값으로 변수들을 수정

## License

MIT License