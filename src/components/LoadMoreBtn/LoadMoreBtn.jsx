import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onLoadMore, hasMore }) {
    return (
        <div>
            {hasMore && (
                <button className={css.btnLoader} onClick={onLoadMore}>Load more</button>
            )}
        </div>
    );
}
