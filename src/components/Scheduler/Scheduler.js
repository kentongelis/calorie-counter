import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetCalories } from '../../slices/calorieSlice';
import { clearMeals } from '../../slices/mealsSlice';

const Scheduler = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const targetHour = 4;
        const targetMinute = 0;

        const now = new Date();
        const target = new Date();
        target.setHours(targetHour, targetMinute, 0, 0);

        const timeout = target.getTime() - now.getTime();

        const timer = setTimeout(() => {
            dispatch(resetCalories());
            dispatch(clearMeals())
        }, timeout);

        return () => clearTimeout(timer);
    }, [dispatch]);

    return null;
}

export default Scheduler;