export const loadState = () => {
    try {
        const saved = localStorage.getItem("meals");
        return saved ? JSON.parse(saved) : undefined;
    } catch (e) {
        console.error("Load error:", e);
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const json = JSON.stringify(state);
        localStorage.setItem("meals", json);
    } catch (e) {
        console.error("Save error:", e);
    }
};