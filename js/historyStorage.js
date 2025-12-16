window.historyStorage = {
    getHistory: function () {
        try {
            return window.localStorage.getItem('dogTrackerHistory');
        } catch (e) {
            return null;
        }
    },
    saveHistory: function (json) {
        try {
            window.localStorage.setItem('dogTrackerHistory', json);
        } catch (e) {
            // ignore
        }
    },
    clearHistory: function () {
        try {
            window.localStorage.removeItem('dogTrackerHistory');
        } catch (e) {
            // ignore
        }
    }
};
