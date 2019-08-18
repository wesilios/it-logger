import React, { useState, useEffect } from 'react';
import LogItems from './LogItems';
import PreLoader from '../layout/PreLoader';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line;
  }, []);

  const getLogs = async () => {
    setLoading(true);
    const res = await fetch('/logs');
    const data = await res.json();
    setLogs(data);
    setTimeout(() => setLoading(false), 1000);
  };

  if (loading) {
    return <PreLoader />;
  } else {
    return (
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System logs</h4>
        </li>
        {(!loading && logs.length === 0 && (
          <p className='center'>No logs to show...</p>
        )) ||
          logs.map(log => <LogItems key={log.id} log={log} />)}
      </ul>
    );
  }
};

export default Logs;
