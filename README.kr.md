# 특수문자 단축키 플러그인

[English](README.md) | 한국어

특수문자를 키보드 단축키로 삽입할 수 있는 커스터마이징 가능한 Obsidian 플러그인입니다. 사용자는 설정 인터페이스를 통해 자신만의 커스텀 문자와 명령어 이름을 추가할 수 있습니다.

## 주요 기능

- **커스터마이징 가능한 단축키**: 원하는 특수문자를 자유롭게 추가
- **쉬운 관리**: 설정 UI를 통해 단축키 추가, 삭제, 관리
- **기본 문자 제공**: 중점(·), 모서리 괄호(｢｣) 등 유용한 문자 포함
- **실시간 업데이트**: Obsidian 재시작 없이 즉시 변경사항 적용
- **명령 팔레트 통합**: 모든 단축키가 명령 팔레트에 표시

## 설치 방법

### 커뮤니티 플러그인에서 설치
1. **설정 → 커뮤니티 플러그인** 열기
2. 커뮤니티 플러그인 찾아보기
3. "Shortcut for special characters" 검색
4. 플러그인 설치 및 활성화

### 수동 설치
1. 최신 릴리스 파일 다운로드:
   - **권장**: `shortcut-for-special-characters-{version}.zip` (완전한 패키지)
   - **개별 파일**: `main.js`, `manifest.json`, `styles.css`
2. zip 설치의 경우: 압축 해제 후 내용을 볼트의 `.obsidian/plugins/shortcut-for-special-characters/` 폴더에 복사
3. 개별 파일의 경우: 볼트의 `.obsidian/plugins/shortcut-for-special-characters/` 폴더에 복사
4. Obsidian 재시작 후 **설정 → 커뮤니티 플러그인**에서 플러그인 활성화

## 사용 방법

### 커스텀 단축키 추가
1. **설정 → Shortcut for special characters**로 이동
2. "Add New Shortcut" 섹션에서:
   - "Character to insert"에 삽입할 문자 입력
   - "Command name"에 설명적인 이름 입력
   - "Add Shortcut" 버튼 클릭
3. 새 명령어가 즉시 명령 팔레트에 나타남

### 단축키 사용
1. 명령 팔레트 열기 (`Ctrl+P` / `Cmd+P`)
2. 커스텀 명령어 이름 검색
3. 명령어 실행하여 커서 위치에 문자 삽입

### 단축키 관리
- 설정 탭에서 현재 모든 단축키 확인
- "Remove" 버튼으로 불필요한 단축키 삭제
- 변경사항은 자동으로 저장됨

## 기본 제공 문자

플러그인에는 다음 미리 구성된 문자가 포함되어 있습니다:
- **중점 (·)**: `Insert Middle Dot (·)`
- **왼쪽 위 모서리 괄호 (｢)**: `Insert Left Upper Corner Bracket (｢)`
- **오른쪽 아래 모서리 괄호 (｣)**: `Insert Right Down Corner Bracket (｣)`

## 개발

### 사전 요구사항
- Node.js 16+ (`node --version`)
- npm 또는 yarn

### 설정
```bash
# 저장소 클론
git clone <repository-url>
cd obsidian-plugin

# 의존성 설치
npm install

# 개발 모드 시작
npm run dev
```

### 빌드
```bash
# 프로덕션 빌드
npm run build
```

### 파일 구조
```
src/
├── settings.ts          # 설정 인터페이스 및 기본값
├── settings-tab.ts      # 설정 UI 구현
main.ts                  # 메인 플러그인 파일
manifest.json           # 플러그인 매니페스트
```

## 기여하기

1. 저장소 포크
2. 기능 브랜치 생성 (`git checkout -b feature/amazing-feature`)
3. 변경사항 커밋 (`git commit -m 'Add some amazing feature'`)
4. 브랜치에 푸시 (`git push origin feature/amazing-feature`)
5. Pull Request 생성

## 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 지원

문제가 발생하거나 기능 요청이 있으시면:
1. GitHub의 기존 이슈 확인
2. 상세한 설명과 함께 새 이슈 생성
3. Obsidian 버전 및 플러그인 버전 정보 포함

---

**Obsidian 커뮤니티를 위해 ❤️로 만들어졌습니다**
