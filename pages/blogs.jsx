import { BlogList } from '../data/blogs';
import { Description, Heading, BlogCard } from '../utils';

const projects = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <Heading text={'Blog'} />
            <Description
                text={
                    'My random thoughts'
                }
            />

            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16">
                {BlogList.map((post) => (
                    <BlogCard key={post.id} {...post} />
                ))}
            </div>
        </section>
    );
};

export default projects;
