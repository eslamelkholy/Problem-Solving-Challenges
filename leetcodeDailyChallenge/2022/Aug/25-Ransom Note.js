/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    const ransomNoteMap = {};
    const magazineFreq = {};
    
    for(const char of ransomNote) {
        ransomNoteMap[char] ? ransomNoteMap[char]++: ransomNoteMap[char] = 1;
    }
    
    for(const char of magazine) {
        magazineFreq[char] ? magazineFreq[char]++: magazineFreq[char] = 1;
    }
    
    for(const key in ransomNoteMap) {
        if(magazineFreq[key] === undefined || magazineFreq[key] < ransomNoteMap[key]) {
            return false;
        }
    }
    
    return true;
};


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    const magazineCharFreq = {};
    
    for(const char of magazine) {
        magazineCharFreq[char] ? magazineCharFreq[char]++: magazineCharFreq[char] = 1;
    }

    for(const char of ransomNote) {
        console.log(char);
        if(magazineCharFreq[char] === undefined || --magazineCharFreq[char] < 0) {
            return false;
        }
    }
    
    return true;
};

