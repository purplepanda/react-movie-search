export default class CookieUtils {
    setCookie(name, value) {
        document.cookie = `${name}=${value}`;
    }

    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);

        if (parts.length === 2) {
          return parts[1].split(';')[0];
				}
				
				return '';
    }

    addToExistingCookieValue(name, additionalValue) {
			const currentCookieValue = this.getCookie(name);
			const value = `${currentCookieValue} , ${additionalValue}`;

			this.setCookie(name, value);
		}
		
		deleteFromExistingCookieValue(name, deletedValue) {
			const currentCookieValue = this.getCookie(name);
			const value = currentCookieValue.replace(`, ${deletedValue}`, '');

			this.setCookie(name, value);
    }
}