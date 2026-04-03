import { Injectable } from '@angular/core';
import { db, auth, collection, addDoc, serverTimestamp } from '../firebase';

export enum AuditAction {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  VIEW_SCAN = 'VIEW_SCAN',
  CREATE_SCAN = 'CREATE_SCAN',
  DELETE_SCAN = 'DELETE_SCAN',
  EXPORT_REPORT = 'EXPORT_REPORT',
  ACCESS_DENIED = 'ACCESS_DENIED',
  AI_ANALYSIS = 'AI_ANALYSIS'
}

export interface AuditLog {
  id?: string;
  userId: string;
  userEmail: string | null;
  action: AuditAction;
  resourceId?: string | null;
  resourceType?: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timestamp: any; 
  userAgent: string;
  status: 'SUCCESS' | 'FAILURE';
}

@Injectable({
  providedIn: 'root'
})
export class AuditService {
  async log(action: AuditAction, resourceId?: string, resourceType?: string, status: 'SUCCESS' | 'FAILURE' = 'SUCCESS') {
    const user = auth.currentUser;
    if (!user) return;

    try {
      await addDoc(collection(db, 'audit_logs'), {
        userId: user.uid,
        userEmail: user.email,
        action,
        resourceId: resourceId || null,
        resourceType: resourceType || null,
        timestamp: serverTimestamp(),
        userAgent: navigator.userAgent,
        status
      });
    } catch (error) {
      console.error('Failed to write audit log:', error);
    }
  }
}
