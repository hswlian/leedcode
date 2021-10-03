// 给你一个字符串 s，找到 s 中最长的回文子串。

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"
// 示例 3：

// 输入：s = "a"
// 输出："a"
// 示例 4：

// 输入：s = "ac"
// 输出："a"
//  

// 提示：

// 1 <= s.length <= 1000
// s 仅由数字和英文字母（大写和/或小写）组成

var isPalindrome = function (str) {
    var left = 0;
    var right = str.length-1;
    while(left < right) {
        if(str[left] !== str[right]) {
            return false
        }
        left++
        right--

    };

    return true
};

/**
 * 解题思路：以 2、3、4 (直到 Math.floor(s.length / 2)) 个字符的方式，遍历字符串, 直到在迭代时，发现 这个 字符串 对称。
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let len = s.length
    let str = ''
    if (len == 1) {
        return s
    }
    if (len == 2) {
        if (s[0] == s[1]) {
            return s
        }
    }
    if (len == 3) {
        if (s[0] == s[2]) {
            return s
        }
        if (s[0] == s[1]) {
            return s.slice(0,2)
        }
        if (s[1] == s[2]) {
            return s.slice(1,3)
        }
    }
    for (let i = 2; i <= len ; i++) {
        // 以 i 个 (2，3，4,直到 Math.floor(s.length / 2)) 个字符
        for (let j = 0, lenj = s.length; j + i <= lenj; j++) {
            // temStr 这是 这个 字符串
            let temStr = s.slice(j, j + i);
            // 判断 temStr 是不是正反都是一样的字符串
            let temStrLen = temStr.length
            // let l = temStr.split('').reverse().join('')
            if (isPalindrome(temStr) && str.length < temStrLen) {
                str = temStr
            }
        }
    }
    if (str == '') {
        return s[0]
    }
    return str
};

console.log(longestPalindrome('kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv'))