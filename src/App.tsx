import { useState } from 'react';
import './App.css';
import './index.scss';

function App() {
    const [tags, setTags] = useState<string[]>([]);

    const handleRemove = (index: number) => {
        const newTags = [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleAddTag = (e: any) => {
        // type: KeyboardEvent
        if (e.key === 'Enter' && (e.target as HTMLInputElement).value !== '') {
            setTags([...tags, (e.target as HTMLInputElement).value]);
            (e.currentTarget as HTMLInputElement).value = '';
        }
    };

    const handleRemoveAll = () => {
        if (tags.length > 0) setTags([]);
    };

    return (
        <div className="container-search-tag">
            <div className="wrapper">
                <h2 className="wrapper__title">Search Tags</h2>
                <ul className="wrapper__content">
                    {tags.map((tag, index) => (
                        <li className="wrapper__tag">
                            {tag}
                            <i
                                className="x-icon fa-solid fa-x"
                                onClick={() => handleRemove(index)}
                            />
                        </li>
                    ))}

                    <input
                        className="wrapper__input"
                        placeholder="Type and enter"
                        autoFocus
                        onKeyDown={(e) => handleAddTag(e)}
                    />
                </ul>
                <div className="wrapper__footer">
                    <button
                        className="wrapper__btn"
                        onClick={() => handleRemoveAll()}
                    >
                        Remove All
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
