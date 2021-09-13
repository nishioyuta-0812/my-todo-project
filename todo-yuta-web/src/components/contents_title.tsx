import './contents_title.scss';

function ContentsTitle(props: any){
    return (
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <h2 className='contents-title'>{props.title}</h2>
    );
}
export default ContentsTitle