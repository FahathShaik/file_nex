export default function Card(props: any) {
    const {title, cardText, iconPath} = props;
    return (<>
        <div className="card">
            <img src={iconPath} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{cardText}</p>
            </div>
        </div>
    </>)
}