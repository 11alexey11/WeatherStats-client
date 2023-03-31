export const host = 'http://localhost:5088';

export const loginUrl = `${host}/entrance/login`;

export const registerUrl = `${host}/entrance`;

export const typhoonsUrl = `${host}/typhoons`;

export const typhoonsRoutes = [
    'strongest',
    'averagecount',
    'mostcalmdates',
    'winddirections/strongest',
    'winddirections',
    'averagewindstrength',
];

export const typhoonRoutesName = {
    'strongest': 'Самый сильный тайфун',
    'averagecount': 'Среднее количество тайфунов в каждом году',
    'mostcalmdates': 'Самые спокойные даты',
    'winddirections/strongest': 'Частота направлений ветра',
    'winddirections': 'Направление ветра',
    'averagewindstrength': 'Средняя сила ветра по ветрам'
}
