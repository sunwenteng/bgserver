#include "StringChecker.h"

StringChecker::StringChecker()
{
	root = new Node();
}

StringChecker::~StringChecker()
{
	DeleteTree( root );
}

void StringChecker::AddPattern( const char* pat )
{
	uint16 	depth 	= 0;
	Node*	node	= root;
	while ( *pat )
	{
		++depth;

		uint8 k = *pat;

		// all lower case
		if ( k >= 'A' && k <= 'Z' ) k = k - 'A' + 'a';

		if ( node->next[k] == NULL )
		{
			node->next[k] = new Node();
		}
		node = node->next[k];
		++pat;
	}
	node->depth = depth;
}

void StringChecker::Build()
{
	std::queue< Node* > q;

	root->fail = NULL;
	q.push( root );

	while ( !q.empty() )
	{
		Node* node = q.front(); q.pop();
		for ( int i = 0; i < BRANCH_NUM_MAX; i++ )
		{
//			if ( node->next[i] == NULL ) continue;
			if ( node->next.find(i) == node->next.end() ) continue;
			Node* p = node->fail;
			while ( p )
			{
//				if ( p->next[i] )
				if(p->next.find(i) != p->next.end())
				{
					node->next[i]->fail = p->next[i];
					break;
				}
				p = p->fail;
			}
			if ( p == NULL )
			{
				node->next[i]->fail = root;
			}
			q.push( node->next[i] );
		}
	}
}

bool StringChecker::Replace( std::string& src )
{
	bool ret = false;
	std::string tmp;
	std::string::iterator st = src.begin();
	std::string::iterator ed = src.begin();

	Node* node = root;

	while ( ed != src.end() )
	{
		uint8 k =  *ed; // it must be cast to Unsigned !!

		// all lower case
		if ( k >= 'A' && k <= 'Z' ) k = k - 'A' + 'a';

//		while ( node->next[k] == NULL && node != root )
		while( node->next.find(k) == node->next.end() && node != root)
		{
			node = node->fail;
		}

		if (  node->next.find(k) != node->next.end() ) node = node->next[k];
//		if ( node->next[k] ) node = node->next[k];

		if ( node != root && node->depth )
		{
			tmp.append( st, ed - node->depth + 1 );
			tmp.append( 3, '*' ); // replace

			node = root;// restart

			st = ed + 1;
			ret = true;
		}
		++ed;
	}

	if ( st != src.end() )
	{
		tmp.append( st, ed );
	}

	src = tmp;

	return ret;
}

void StringChecker::Reset()
{
	DeleteTree( root );
	root = new Node();
}

void StringChecker::DeleteTree( Node* node )
{
	if(node == NULL) return ;
	for ( std::map<uint8,Node*>::iterator iter = node->next.begin(); iter != node->next.end(); iter++)
	{
//		if ( node->next[i] ) DeleteTree( node->next[i] );
		DeleteTree( iter->second );
	}
	delete node;
}
