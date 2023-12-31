// 두 문자열이 서로 아나그램인 경우 true를 반환합니다.
// 모든 입력값은 단어로 구성되어 있으며(공백, 마침표, 구두점, 숫자를 고려하지 않는다),
//              소문자로 이루어져 있다고 가정한다.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charCount = new Map();

  for (const char of str1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of str2) {
    const getCount = charCount.get(char);

    if (!getCount) {
      return false;
    }

    charCount.set(char, getCount - 1);
  }

  return true;
}

console.log(validAnagram("anagram", "naagram"));
