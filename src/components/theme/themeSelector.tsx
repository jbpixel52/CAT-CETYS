import { useEffect } from 'react';
import { themeChange } from 'theme-change';


export default function ThemeSelector(): JSX.Element {
    const themeValues = [ "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter" ];

    useEffect(() => {
        themeChange(false);
    });
    return (
        <select className="glass" data-choose-theme>
            <option value="">default theme</option>
            {themeValues.map((value) => (
                <option className="text-primary" key={value.toLowerCase()} value={value.toLowerCase()}>
                    {value}
                </option>))}
        </select>
    )

}

