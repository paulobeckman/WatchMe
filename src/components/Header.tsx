interface genreResponseProps {
    title: string;
}

export function Header(props: genreResponseProps){
    return (
    <header>
        <span className="category">Categoria:<span> {props.title}</span></span>
    </header>
    );
}