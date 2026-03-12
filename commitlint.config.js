module.exports = {
  extends: ["gitmoji"],
  rules: {
    // 0: 비활성, 1: 경고, 2: 에러
    "start-with-gitmoji": [0],
    "type-empty": [2, "never"], // 타입(feat, fix 등)은 반드시 써야 함
    "subject-empty": [2, "never"], // 제목(작업 내용)은 반드시 써야 함
    "type-case": [2, "always", "lower-case"], // 타입은 PascalCase로 작성해야 함 (예: feat, fix, docs)
    "header-max-length": [2, "always", 72],
  },
  parserPreset: {
    parserOpts: {
      // 정해진 헤더 패턴을 벗어 났을 때 커밋 통과 불가"
      headerPattern:
        /^(\p{Extended_Pictographic}(?:\uFE0F|\u200D\p{Extended_Pictographic})*)\s+(\w+):\s+(.+)$/u,
      headerCorrespondence: ["emoji", "type", "subject"],
    },
  },
};
