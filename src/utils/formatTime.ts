export const formatTime = (time: number) => {
	const date = new Date(time * 1000); // Преобразуем Unix-время в миллисекунды
	const hours = date.getHours().toString().padStart(2, '0'); // Получаем часы
	const minutes = date.getMinutes().toString().padStart(2, '0'); // Получаем минуты
	const seconds = date.getSeconds().toString().padStart(2, '0'); // Получаем секунды
	if (!time) return '';

	return `${hours}:${minutes}:${seconds}`;
};
