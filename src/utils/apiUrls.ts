export const getApiUrl = (category: string, difficulty: string): string => {
    const baseApiUrl = 'https://opentdb.com/api.php?';
    
    const apiUrls: Record<string, string> = {
        'general-easy': `${baseApiUrl}amount=50&category=9&difficulty=easy&type=multiple`,
        'general-medium': `${baseApiUrl}amount=50&category=9&difficulty=medium&type=multiple`,
        'general-hard': `${baseApiUrl}amount=50&category=9&difficulty=hard&type=multiple`,
        'science-easy': `${baseApiUrl}amount=50&category=18&difficulty=easy&type=multiple`,
        'science-medium': `${baseApiUrl}amount=50&category=18&difficulty=medium&type=multiple`,
        'science-hard': `${baseApiUrl}amount=50&category=18&difficulty=hard&type=multiple`,
        'history-easy': `${baseApiUrl}amount=50&category=23&difficulty=easy&type=multiple`,
        'history-medium': `${baseApiUrl}amount=10&category=23&difficulty=medium&type=multiple`,
        'history-hard': `${baseApiUrl}amount=10&category=23&difficulty=hard&type=multiple`,
    };

    return apiUrls[`${category}-${difficulty}`];
};