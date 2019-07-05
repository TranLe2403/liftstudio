function MyImage1() {
    return (
        <div>
            <img src="/static/mario.png" alt="game1" className="gamePic"/>
            <style jsx>
                {`
                    .gamePic{
                        width: 408px;
                        height: 427px;
                    }
                `}
            </style>
        </div>
    )
}

export default MyImage1