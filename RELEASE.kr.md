# 릴리스 가이드

[English](RELEASE.md) | 한국어

이 문서는 GitHub Actions를 사용하여 릴리스를 생성하는 방법을 설명합니다.

## 자동 릴리스 프로세스

GitHub Actions 워크플로우는 태그를 푸시하거나 수동으로 릴리스를 트리거할 때 자동으로 릴리스를 생성합니다.

### 방법 1: Git 태그 사용 (권장)

1. **manifest.json에서 버전 업데이트**:
   ```bash
   # manifest.json을 편집하고 version 필드 업데이트
   # 예시: "version": "2.1.0"
   ```

2. **태그 생성 및 푸시**:
   ```bash
   git add .
   git commit -m "Release v2.1.0"
   git tag v2.1.0
   git push origin v2.1.0
   ```

3. **GitHub Actions가 자동으로**:
   - 플러그인 빌드
   - GitHub 릴리스 생성
   - `main.js`, `manifest.json`, `styles.css` 업로드

### 방법 2: 수동 릴리스

1. GitHub의 **Actions** 탭으로 이동
2. **Release Plugin** 워크플로우 선택
3. **Run workflow** 클릭
4. 버전 입력 (예: `v2.1.0`)
5. **Run workflow** 클릭

### 방법 3: npm 스크립트 사용

```bash
# 패치 버전 (1.0.0 -> 1.0.1)
npm run release:patch

# 마이너 버전 (1.0.0 -> 1.1.0)
npm run release:minor

# 메이저 버전 (1.0.0 -> 2.0.0)
npm run release:major
```

## 릴리스 파일

각 릴리스에는 다음이 포함됩니다:
- `shortcut-for-special-characters-{version}.zip` - 완전한 플러그인 패키지 (권장)
- `main.js` - 메인 플러그인 파일 (개별 다운로드)
- `manifest.json` - 플러그인 매니페스트 (개별 다운로드)
- `styles.css` - 플러그인 스타일 (개별 다운로드)

## 설치 방법

### 권장: Zip 설치
1. `shortcut-for-special-characters-{version}.zip` 다운로드
2. zip 파일 압축 해제
3. 압축 해제된 파일들을 `.obsidian/plugins/shortcut-for-special-characters/`에 복사
4. Obsidian 재시작 후 플러그인 활성화

### 수동 설치
1. 개별 파일들 (`main.js`, `manifest.json`, `styles.css`) 다운로드
2. `.obsidian/plugins/shortcut-for-special-characters/`에 복사
3. Obsidian 재시작 후 플러그인 활성화

## 문제 해결

### 빌드 실패
- 모든 TypeScript 파일이 오류 없이 컴파일되는지 확인
- 모든 의존성이 올바르게 설치되었는지 확인

### 릴리스가 생성되지 않음
- 태그 형식이 올바른지 확인 (`v*` 패턴)
- GitHub Actions 로그에서 오류 확인
- 저장소에 대한 쓰기 권한이 있는지 확인

### 파일이 업로드되지 않음
- `dist/shortcut-for-special-characters/` 폴더가 존재하는지 확인
- 모든 필수 파일이 있는지 확인
- 워크플로우 로그에서 업로드 오류 검토

## 릴리스 체크리스트

릴리스 전에 다음 사항들을 확인하세요:

- [ ] `manifest.json`의 버전 번호 업데이트
- [ ] `versions.json`에 새 버전 추가 (필요한 경우)
- [ ] 모든 기능이 정상 작동하는지 테스트
- [ ] README.md 업데이트 (필요한 경우)
- [ ] 변경사항을 커밋하고 푸시
- [ ] 태그 생성 및 푸시

## 버전 관리

### 시맨틱 버저닝 (Semantic Versioning)
- **MAJOR** (메이저): 호환되지 않는 API 변경
- **MINOR** (마이너): 하위 호환되는 기능 추가
- **PATCH** (패치): 하위 호환되는 버그 수정

### 예시
- `1.0.0` → `1.0.1`: 버그 수정
- `1.0.0` → `1.1.0`: 새 기능 추가
- `1.0.0` → `2.0.0`: 주요 변경사항

## 커뮤니티 플러그인 등록

플러그인을 Obsidian 커뮤니티 플러그인 목록에 추가하려면:

1. [플러그인 가이드라인](https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines) 확인
2. 초기 버전 게시
3. 저장소 루트에 `README.md` 파일이 있는지 확인
4. [obsidian-releases](https://github.com/obsidianmd/obsidian-releases)에 Pull Request 생성

---

**Obsidian 커뮤니티를 위해 ❤️로 만들어졌습니다**
